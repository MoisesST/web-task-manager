import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  template: `
    <h1
      [class]="style"
      class="text-2xl md:text-4xl font-medium">{{ name }}
    </h1>
  `,
})
export class TitleComponent {
  @Input() style = '';
  @Input() name = '';
}
