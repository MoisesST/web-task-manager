import { Component } from '@angular/core';

import { TaskComponent } from '../../../elements/task/task.component';
import { NoTasksComponent } from '../../../template/no-tasks/no-tasks.component';
import { TitleComponent } from '../../../elements/title/title.component';
import { tasks } from './../../../../mocks/tasks';

@Component({
  selector: 'app-list-task',
  standalone: true,
  imports: [TitleComponent, TaskComponent, NoTasksComponent],
  templateUrl: './list-tasks.component.html',
})
export class ListTasksComponent {
  mockTasks = tasks;
}
