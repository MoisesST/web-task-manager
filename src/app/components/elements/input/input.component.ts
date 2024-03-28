import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  template: `
    <input
      [type]="type"
      [placeholder]="placeholder"
      class="
        w-full h-10 px-3 rounded outline-none transition-all bg-stone-800
        placeholder-stone-500 focus:ring-1 focus:ring-sky-500
        invalid:ring-pink-500 invalid:text-pink-600
        focus:invalid:ring-pink-500
      "
    >
  `,
})
export class InputComponent {
  @Input() type!: 'text' | 'email' | 'password';
  @Input() placeholder = '';
}
