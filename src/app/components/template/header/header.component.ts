import { Component } from '@angular/core';

import { LinkButtonComponent } from '../../elements/link-button/link-button.component';
import { SvgIconComponent } from '../../elements/svg-icon/svg-icon.component';

import { Icons } from '../../../utils/icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LinkButtonComponent, SvgIconComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  HOME = Icons.HOME;
  CREATE = Icons.CREATE;
  TASKS = Icons.TASKS;
  LOGOUT = Icons.LOGOUT;
  logged = true;
}
