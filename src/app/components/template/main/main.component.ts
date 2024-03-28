import { Component } from '@angular/core';
import { TitleComponent } from '../../elements/title/title.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TitleComponent],
  template: `
    <main>
      <div class="w-full md:w-[1000px] mx-auto">
        <app-title name="Home - Test" />
      </div>
    </main>
  `,
})
export class MainComponent {}
