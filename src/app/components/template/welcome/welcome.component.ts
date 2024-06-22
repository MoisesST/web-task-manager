import { Component } from '@angular/core';
import { TitleComponent } from '../../elements/title/title.component';
import { LinkButtonComponent } from '../../elements/link-button/link-button.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [TitleComponent, LinkButtonComponent],
  templateUrl: './welcome.component.html',
  styles: ``
})
export class WelcomeComponent {

}
