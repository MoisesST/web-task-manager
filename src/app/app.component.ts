import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LinkButtonComponent } from './components/elements/link-button/link-button.component';
import { SvgIconComponent } from './components/elements/svg-icon/svg-icon.component';
import { Icons } from './utils/icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LinkButtonComponent,
    SvgIconComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  HOME = Icons.HOME;
  CREATE = Icons.CREATE;
  TASKS = Icons.TASKS;
  LOGOUT = Icons.LOGOUT;
  logged = true;
}
