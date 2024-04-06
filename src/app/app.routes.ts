import { Routes } from '@angular/router';

import { CreateTaskComponent } from './components/pages/tasks/create-task/create-task.component';
import { ListTasksComponent } from './components/pages/tasks/list-tasks/list-tasks.component';

export const routes: Routes = [
  { path: 'home', title: 'Home', component: ListTasksComponent },
  { path: 'create-task', title: 'Create Task', component: CreateTaskComponent },
];
