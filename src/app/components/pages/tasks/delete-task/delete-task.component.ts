import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ITask } from '../../../../interfaces/task';
import { TasksService } from '../../../../services/tasks/task.service';
import { TitleComponent } from '../../../elements/title/title.component';
import { ButtonComponent } from '../../../elements/button/button.component';
import { SvgIconComponent } from '../../../elements/svg-icon/svg-icon.component';
import { Icons } from '../../../../utils/icons';

@Component({
  selector: 'app-delete-task',
  standalone: true,
  imports: [TitleComponent, ButtonComponent, SvgIconComponent],
  template: `
    <div class="flex items-center h-20">
      <app-title name="Delete Task" />
    </div>

    <p class="text-center">Task ID: {{ task.id }}?</p>
    <p class="text-center">{{ task.description }}</p>

    <button class="group" (click)="delete()">
      <app-svg-icon
        [style]="
          'w-5 text-stone-400 transition-all group-hover:stroke-pink-800'
        "
        [icon]="TRASH"
      />
    </button>
  `,
})
export class DeleteTaskComponent {
  TRASH = Icons.TRASH;
  task!: ITask;

  constructor(
    private taskService: TasksService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.loadTask();
  }

  loadTask() {
    this.task = { description: '' } as ITask
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.taskService.getOne(id).subscribe(task => {
      this.task = task;
    });
  }

  delete(): void {
    this.taskService.delete(this.task).subscribe({
      next: () => this.router.navigate(['/home']),
      error: (error) => console.log('Error deleting tasks', error),
      complete: () => console.log('Delete works'),
    });
  }
}
