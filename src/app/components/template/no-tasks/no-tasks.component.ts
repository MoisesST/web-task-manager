import { Component } from '@angular/core';

import { SvgIconComponent } from '../../elements/svg-icon/svg-icon.component';
import { LinkButtonComponent } from '../../elements/link-button/link-button.component';
import { Icons } from '../../../utils/icons';

@Component({
  selector: 'app-no-tasks',
  standalone: true,
  imports: [SvgIconComponent, LinkButtonComponent],
  template: `
    <div class="flex flex-col justify-evenly h-60 text-center text-stone-700">
      <app-svg-icon [style]="'w-24 m-auto'" [icon]="NO_TASKS"/>

      <p class="text-sm">
        <strong>You don't have tasks registered yet</strong> <br>
        Create tasks and organize your to-do items
      </p>

      <app-link-button label="Click here to add new tasks." url="/create-task"/>
    </div>
  `,
})
export class NoTasksComponent {
  NO_TASKS = Icons.NO_TASKS;
}
