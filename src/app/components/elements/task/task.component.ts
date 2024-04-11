import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

import { LinkButtonComponent } from '../link-button/link-button.component';
import { Icons } from '../../../utils/icons';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [LinkButtonComponent, SvgIconComponent, NgClass],
  template: `
    <article
      class="
        flex justify-between w-full max-h-20 mb-4 p-3 rounded bg-stone-800
      "
    >
      <div class="overflow-hidden">
        <p
          [ngClass]="{
            'decoration-2 text-white decoration-pink-600 line-through'
            : true
          }"
          class="line-clamp-2"
        >
            {{ description }}
            Lorem ipsum dolor ptatum dolor autem cupiditate ipsum dolor ptatum
            dolor autem cupiditate ipsum dolor ptatum dolor ipsum dolor ptatum
            dolor
        </p>
      </div>

      <div class="flex flex-col gap-3 items-center justify-center">
        <button class="group">
          <app-svg-icon
            [style]="
              'w-5 text-stone-400 transition-all group-hover:stroke-pink-800'
            "
            [icon]="TRASH"
          />
        </button>
        <app-link-button url="/">
          <app-svg-icon [style]="'w-5'" [icon]="EDIT"/>
        </app-link-button>
      </div>
    </article>
  `,
})
export class TaskComponent {
  @Input() description = '';
  TRASH = Icons.TRASH;
  EDIT = Icons.EDIT;
}
