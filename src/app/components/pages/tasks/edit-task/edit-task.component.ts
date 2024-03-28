import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './edit-task.component.html',
})
export class EditTaskComponent {}
