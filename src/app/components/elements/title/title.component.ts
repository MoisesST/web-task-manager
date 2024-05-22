import { Component, Input } from '@angular/core';
import { CapitalizePipe } from '../../../pipes/capitalize.pipe';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CapitalizePipe],
  template: `
    <h1
      [class]="style"
      class="text-2xl md:text-4xl font-medium">{{ name | capitalize }}
    </h1>
  `,
})
export class TitleComponent {
  @Input() style = '';
  @Input() name = '';
}
