import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { TitleComponent } from '../../elements/title/title.component';
import { ButtonComponent } from '../../elements/button/button.component';
import { StorageService } from '../../../services/users/storage.service';
import { UsersService } from './../../../services/users/users.service';
import { IUser } from '../../../interfaces/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [TitleComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  users: IUser[] = [];
  loginForm!: FormGroup;

  constructor(
    private storageService: StorageService,
    private userService: UsersService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
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

  get email() : string | any {
    return this.loginForm.get('email')!;
  }

  get password() : string | any {
    return this.loginForm.get('password')!;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const user = this.loginForm.value;

      const foundUser = this.users.find(
        u => u.email == user.email && u.password == user.password
      );

      if (foundUser == undefined) {
        alert('Try again incorrect username or password!!');
      } else {
        this.storageService.saveUser(user);
        this.router.navigate(['/home']);
        setTimeout(() => {
          location.reload();
        }, 1000);
      }
    }
  }
}
