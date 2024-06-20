import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { TitleComponent } from '../../../elements/title/title.component';
import { InputComponent } from '../../../elements/input/input.component';
import { ButtonComponent } from '../../../elements/button/button.component';
import { TasksService } from '../../../../services/tasks/task.service';
import { StorageService } from '../../../../services/users/storage.service';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [
    TitleComponent,
    InputComponent,
    ButtonComponent,
    ReactiveFormsModule
  ],
  templateUrl: './create-task.component.html',
})
export class CreateTaskComponent {
  newTaskForm!: FormGroup;

  constructor(
    private storageService: StorageService,
    private taskServide: TasksService,
    private router: Router
  ) {

    const userSession = this.storageService.getUser();

    this.newTaskForm = new FormGroup({
      description: new FormControl(''),
      completed: new FormControl(false),
      userId: new FormControl(userSession.id),
    });
  }

  get description() : string | any {
    return this.newTaskForm.get('description')!;
  }

  onSubmit() {
    if (this.newTaskForm.valid) {
      const data = this.newTaskForm.value;
      this.taskServide.create(data);
      this.router.navigate(['/home']);
    }
  }
}
