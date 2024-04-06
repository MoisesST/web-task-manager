import { Component } from '@angular/core';

import { HeaderComponent } from './atividade-10/header/header.component';
import { FooterComponent } from './atividade-10/footer/footer.component';
import { MainComponent } from './atividade-10/main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, MainComponent, FooterComponent],
  template: `
    <app-header />
    <app-main />
    <app-footer />
  `,
})
export class AppComponent {}
