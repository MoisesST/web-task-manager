import { Routes } from '@angular/router';

import { CreateTaskComponent } from './components/pages/tasks/create-task/create-task.component';
import { ListTaskComponent } from './components/pages/tasks/list-task/list-task.component';
import {EditTaskComponent} from "./components/pages/tasks/edit-task/edit-task.component";
import {PageNotFoundComponent} from "./components/pages/page-not-found/page-not-found.component";

export const routes: Routes = [
  { path: 'home', title: 'Home', component: ListTaskComponent },
  { path: 'create-task', title: 'Create Task', component: CreateTaskComponent },
  { path: 'edit-task', title: 'Edit Task', component: EditTaskComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', title: 'Page Not Found', component: PageNotFoundComponent },
];
