import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  template: `
    <main>
      <div class="relative flex flex-col h-screen w-full md:w-[767px] mx-auto">
        <ng-content />
      </div>
    </main>
  `,
})
export class MainComponent {}
