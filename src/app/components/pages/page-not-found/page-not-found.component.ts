import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div
      class="
        flex flex-col justify-center items-center h-screen text-lg
      "
    >
      <div class="flex">
        <div>
          <p>404</p>
        </div>
          <span class="mx-2">|</span>
        <div>
          <p>Not Found</p>
        </div>
      </div>

      <a routerLink="/home" class="mt-10 text-sm hover:text-gray-400 transition-all">
        Go Home
      </a>
    </div>
  `,
})
export class PageNotFoundComponent {}
