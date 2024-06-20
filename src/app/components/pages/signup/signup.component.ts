import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { TitleComponent } from '../../elements/title/title.component';
import { ButtonComponent } from '../../elements/button/button.component';
import { StorageService } from '../../../services/users/storage.service';
import { UsersService } from './../../../services/users/users.service';
import { IUser } from '../../../interfaces/user';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [TitleComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {
  users: IUser[] = [];
  signupForm!: FormGroup;

  constructor(
    private storageService: StorageService,
    private userService: UsersService,
    private router: Router
  ) {
    this.signupForm = new FormGroup({
      id: new FormControl(Math.floor(Math.random() * 100000)),
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.userService.getAll().subscribe({
      next: (users: any) => this.users = users,
      error: (error) => console.error('Error fetching users:', error),
      complete: () => console.log('Get works'),
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

      const foundUser = this.users.find(u => u.email == user.email);

      if (foundUser != undefined) {
        alert('Error creating user');
      } else {
        this.storageService.saveUser(user);
        const data = this.signupForm.value;
        this.userService.create(data);
        this.router.navigate(['/home']);
        setTimeout(() => {
          location.reload();
        }, 1000);
      }
    }
  }
}
