import { Routes } from '@angular/router';

import { ListTasksComponent } from './components/pages/tasks/list-tasks/list-tasks.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { CreateTaskComponent } from './components/pages/tasks/create-task/create-task.component';
import { EditTaskComponent } from "./components/pages/tasks/edit-task/edit-task.component";
import { PageNotFoundComponent } from "./components/pages/page-not-found/page-not-found.component";

export const routes: Routes = [
  { path: 'home', title: 'Home', component: ListTasksComponent },
  { path: 'signup', title: 'Sign Up', component: SignupComponent },
  { path: 'create-task', title: 'Create Task', component: CreateTaskComponent },
  { path: 'edit-task', title: 'Edit Task', component: EditTaskComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', title: 'Page Not Found', component: PageNotFoundComponent },
];
