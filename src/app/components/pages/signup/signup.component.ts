import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { TitleComponent } from '../../elements/title/title.component';
import { ButtonComponent } from '../../elements/button/button.component';
import { StorageService } from '../../../services/user/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [TitleComponent, ButtonComponent, ReactiveFormsModule ],
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  signupForm!: FormGroup;

  constructor(private storageService: StorageService, private router: Router) {
    this.signupForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  get name() : string | any {
    return this.signupForm.get('name')!;
  }

  get email() : string | any {
    return this.signupForm.get('email')!;
  }

  get password() : string | any {
    return this.signupForm.get('password')!;
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const user = this.signupForm.value;
      this.storageService.saveUser(user);
      this.router.navigate(['/home']);
      setTimeout(() => {
        location.reload();
      }, 1000);
    }
  }
}
