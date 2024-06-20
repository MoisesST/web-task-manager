import { Routes } from '@angular/router';

import { SignupComponent } from './components/pages/signup/signup.component';
import { LoginComponent } from './components/pages/login/login.component';
import { CreateTaskComponent } from './components/pages/tasks/create-task/create-task.component';
import { ListTasksComponent } from './components/pages/tasks/list-tasks/list-tasks.component';
import { EditTaskComponent } from "./components/pages/tasks/edit-task/edit-task.component";
import { DeleteTaskComponent } from './components/pages/tasks/delete-task/delete-task.component';
import { PageNotFoundComponent } from "./components/pages/page-not-found/page-not-found.component";
import { ProfileComponent } from './components/pages/profile/profile.component';
import { AvatarComponent } from './components/pages/avatar/avatar.component';
import { UserComponent } from './components/pages/user/user.component';

export const routes: Routes = [
  { path: 'home', title: 'Home', component: ListTasksComponent },
  { path: 'signup', title: 'Sign Up', component: SignupComponent },
  { path: 'login', title: 'Log In', component: LoginComponent },
  { path: 'create-task', title: 'Create Task', component: CreateTaskComponent },
  { path: 'edit-task/:id', title: 'Edit Task', component: EditTaskComponent },
  { path: 'delete-task/:id', title: 'Delete Task', component: DeleteTaskComponent },
  { path: 'profile', title: 'Profile', component: ProfileComponent },
  { path: 'profile', children: [
    { path: 'avatar', title: 'Avata', component: AvatarComponent },
    { path: 'user', title: 'User', component: UserComponent },
  ] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', title: 'Page Not Found', component: PageNotFoundComponent },
];
