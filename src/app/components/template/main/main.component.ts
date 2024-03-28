import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <main>
      <div
        class="
          flex flex-col w-11/12 sm:w-10/12 md:w-8/12 lg:w-7/12 xl:w-6/12 mx-auto
        "
      >
        <router-outlet />
      </div>
    </main>
  `,
})
export class MainComponent {}
