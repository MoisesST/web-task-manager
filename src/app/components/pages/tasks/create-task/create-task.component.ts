import { Component } from '@angular/core';

import { TitleComponent } from '../../../elements/title/title.component';
import { InputComponent } from '../../../elements/input/input.component';
import { ButtonComponent } from '../../../elements/button/button.component';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [TitleComponent, InputComponent, ButtonComponent],
  template: `
    <div class="flex items-center h-20">
      <app-title name="Adicionar Task" />
    </div>

    <form class="flex flex-col gap-4">
      <app-input placeholder="Adicionar uma nova tarefa" />
      <app-button label="Criar" [isDisabled]="false" />
    </form>
  `,
})
export class CreateTaskComponent {}
