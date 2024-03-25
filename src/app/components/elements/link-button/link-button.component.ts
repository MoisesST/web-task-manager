import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-link-button',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <a
      [routerLink]="url"
      routerLinkActive="text-sky-500"
      class="
        flex gap-2 justify-center items-center mx-1 text-xs sm:text-sm
        font-semibold outline-none transition-all hover:text-sky-500
      "
    >
      <ng-content /> <!-- slot -->
      {{ label }}
    </a>
  `,
})
export class LinkButtonComponent {
  @Input() label = '';
  @Input() url = '';
}
