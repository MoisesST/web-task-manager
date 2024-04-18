import { Component } from '@angular/core';
import { TitleComponent } from '../../elements/title/title.component';
import { InputComponent } from '../../elements/input/input.component';
import { ButtonComponent } from '../../elements/button/button.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [TitleComponent, InputComponent, ButtonComponent],
  templateUrl: './login.component.html',
})
export class LoginComponent {}
