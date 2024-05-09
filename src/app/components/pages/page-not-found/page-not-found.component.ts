import { Component } from '@angular/core';

import { LinkButtonComponent } from '../../elements/link-button/link-button.component';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [LinkButtonComponent],
  template: `
    <div class="flex flex-col items-center text-lg mt-10 ">
      <div class="flex mb-10">
        <div>
          <p>404</p>
        </div>
          <span class="mx-2">|</span>
        <div>
          <p>Not Found</p>
        </div>
      </div>

      <app-link-button label="Go Home" url="/home" />
    </div>
  `,
})
export class PageNotFoundComponent {}
