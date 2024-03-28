import { Routes } from '@angular/router';

import { CreateTaskComponent } from './components/pages/tasks/create-task/create-task.component';
import { ListTaskComponent } from './components/pages/tasks/list-task/list-task.component';

export const routes: Routes = [
  { path: 'home', title: 'Home', component: ListTaskComponent },
  { path: 'create-task', title: 'Create Task', component: CreateTaskComponent },
];
