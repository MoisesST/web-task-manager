import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { CreateTaskComponent } from './components/pages/tasks/create-task/create-task.component';

export const routes: Routes = [
  { path: 'home', title: 'Home', component: AppComponent },
  { path: 'create-task', title: 'Create Task', component: CreateTaskComponent },
];
