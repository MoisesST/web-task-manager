import { Component } from '@angular/core';

import { MainComponent } from './components/template/main/main.component';
import { HeaderComponent } from './components/template/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainComponent, HeaderComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {}
