import { Component } from '@angular/core';
import { TitleComponent } from '../../elements/title/title.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TitleComponent],
  template: `
    <div class="flex justify-center items-center h-20">
      <app-title name="User" />
    </div>

    <div class="flex flex-col gap-4 mt-10">
      <div class="flex items-center h-10 pl-4 bg-stone-800 rounded">
        <p><strong class="mr-1">Id :</strong> Moises</p>
      </div>
      <div class="flex items-center h-10 pl-4 bg-stone-800 rounded">
        <p><strong class="mr-1">Name :</strong> Moises</p>
      </div>
      <div class="flex items-center h-10 pl-4 bg-stone-800 rounded">
        <p><strong class="mr-1">Email :</strong> Moises</p>
        </div>
      <div class="flex items-center h-10 pl-4 bg-stone-800 rounded">
        <p><strong class="mr-1">Password :</strong> Moises</p>
      </div>
    </div>
  `,
})
export class UserComponent {

}
