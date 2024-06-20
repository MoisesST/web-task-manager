import { TasksService } from './../../../../services/tasks/task.service';
import { Component, OnInit } from '@angular/core';

import { TaskComponent } from '../../../elements/task/task.component';
import { NoTasksComponent } from '../../../template/no-tasks/no-tasks.component';
import { TitleComponent } from '../../../elements/title/title.component';
import { ITask } from '../../../../interfaces/task';
import { StorageService } from '../../../../services/users/storage.service';
import { WelcomeComponent } from '../../../template/welcome/welcome.component';

@Component({
  selector: 'app-list-task',
  standalone: true,
  imports: [TitleComponent, TaskComponent, NoTasksComponent, WelcomeComponent],
  templateUrl: './list-tasks.component.html',
})
export class ListTasksComponent implements OnInit {
  tasks: ITask[] = [];
  logged = false;

  constructor(
    private storageService: StorageService,
    private tasksService: TasksService
  ) {
    this.logged = storageService.isLoggedIn();
  }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.tasksService.getAll().subscribe({
      next: (tasks: any) => this.tasks = tasks,
      error: (error) => console.error('Error fetching tasks:', error),
      complete: () => console.log('Get works'),
    });
  }

  completedTasks(): number {
    const tasksC = this.tasks.filter(t => t.completed == true);
    return tasksC.length;
  }
}
