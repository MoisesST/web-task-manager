import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

import { TitleComponent } from '../../../elements/title/title.component';
import { TasksService } from '../../../../services/tasks/task.service';
import { ButtonComponent } from '../../../elements/button/button.component';
import { ITask } from '../../../../interfaces/task';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [
    RouterLink,
    TitleComponent,
    ButtonComponent,
    ReactiveFormsModule,
    NgClass,
  ],
  templateUrl: './edit-task.component.html',
})
export class EditTaskComponent implements OnInit {
  updateTaskForm!: FormGroup;
  task!: ITask;

  constructor(
    private taskService: TasksService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.updateTaskForm = new FormGroup({
      description: new FormControl(''),
      completed: new FormControl(false),
    });
  }

  ngOnInit(): void {
    this.loadTask();
  }

  loadTask() {
    this.task = { description: '' } as ITask
    const id = this.route.snapshot.paramMap.get('id')||'';
    this.taskService.getOne(id).subscribe(task => {
      this.task = task;
    });
  }

  get description() : string | any {
    return this.updateTaskForm.get('description')!;
  }

  onSubmit() {
    if (this.updateTaskForm.valid) {
      this.taskService.update(this.task).subscribe({
        next: () => this.router.navigate(['/home']),
        error: (error) => console.log('Error updating tasks', error),
        complete: () => console.log('Update works'),
      });
    }
  }
}
