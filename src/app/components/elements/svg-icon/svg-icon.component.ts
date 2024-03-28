import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      [class]="style"
    >
      <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="icon"/>
    </svg>
  `,
})
export class SvgIconComponent {
  @Input() style = '';
  @Input() icon = '';
}
