import { Component } from '@angular/core';

import { TitleComponent } from '../../elements/title/title.component';
import { LinkButtonComponent } from '../../elements/link-button/link-button.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [TitleComponent, LinkButtonComponent],
  template: `
    <div class="flex justify-center items-center h-20">
      <app-title name="Profile" />
    </div>

    <nav class="flex justify-center items-center w-full h-full mt-10">
      <ul class="flex flex-col gap-4 w-full h-full">
        <li class="flex justify-center items-center h-10 bg-stone-800 rounded">
          <app-link-button label="Avatar" url="avatar"/>
        </li>
        <li class="flex justify-center items-center h-10 bg-stone-800 rounded">
          <app-link-button label="User" url="user"/>
        </li>
      </ul>
    </nav>
  `,
})
export class ProfileComponent { }
