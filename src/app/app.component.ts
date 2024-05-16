import { Component } from '@angular/core';

import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostComponent],
  template: `
    <app-post />
  `,
})
export class AppComponent {}
