import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { tasks } from '../../../../mocks/tasks';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './edit-task.component.html',
})
export class EditTaskComponent implements OnInit {
  taskID = '';
  task: any;
  mockTasks = tasks;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.taskID = this.route.snapshot.params['id'];
    this.mockTasks = this.mockTasks.filter((t) => {
      return t.id == this.taskID;
    });

    if (this.mockTasks.length == 0)
      alert('Não existem tarefas cadastradas');

    this.task = this.mockTasks[0];
  }
}
