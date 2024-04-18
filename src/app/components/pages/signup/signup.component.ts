import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

import { TitleComponent } from '../../elements/title/title.component';
import { InputComponent } from '../../elements/input/input.component';
import { ButtonComponent } from '../../elements/button/button.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    TitleComponent,
    InputComponent,
    ButtonComponent,
    ReactiveFormsModule
  ],
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    console.log(this.userForm.value);
 }
}
