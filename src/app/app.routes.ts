import { Routes } from '@angular/router';

import { ListTasksComponent } from './components/pages/tasks/list-tasks/list-tasks.component';
import { CreateTaskComponent } from './components/pages/tasks/create-task/create-task.component';
import { EditTaskComponent } from "./components/pages/tasks/edit-task/edit-task.component";
import { PageNotFoundComponent } from "./components/pages/page-not-found/page-not-found.component";

export const routes: Routes = [
  { path: 'home', title: 'Home', component: ListTasksComponent },
  { path: 'create-task', title: 'Create Task', component: CreateTaskComponent },
  { path: 'edit-task/:id', title: 'Edit Task', component: EditTaskComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', title: 'Page Not Found', component: PageNotFoundComponent },
];
