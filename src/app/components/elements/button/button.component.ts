import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  template: `
    <button
      type="submit"
      [class]="style"
      class="
        flex justify-center items-center gap-1 w-full h-10 font-medium
        bg-sky-500 hover:bg-sky-600 transition-all rounded
      "
      [disabled]="isDisabled"
      [ngClass]="{ 'bg-stone-500 hover:bg-stone-500' : isDisabled }"
      (click)="onSubmit()"
      (submit)="onSubmit()"
    >
      {{ label }}
      <ng-content/>
    </button>
  `,
})
export class ButtonComponent {
  @Input() style = '';
  @Input() label = '';
  @Input() isDisabled = true;

  @Output() submitEvent = new EventEmitter<any>();

  onSubmit() {
    this.submitEvent.emit(alert("Hello, World!!"));
  }
}
