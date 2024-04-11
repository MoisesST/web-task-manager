import { Component } from '@angular/core';

import { TaskComponent } from '../../../elements/task/task.component';
import { NoTasksComponent } from '../../../template/no-tasks/no-tasks.component';
import { TitleComponent } from '../../../elements/title/title.component';

@Component({
  selector: 'app-list-task',
  standalone: true,
  imports: [TitleComponent, TaskComponent, NoTasksComponent],
  templateUrl: './list-tasks.component.html',
})
export class ListTasksComponent {
  tasks: object[] = [
    {
      id: "10",
      description: "Drink Water",
      completed: true
   },
   {
      id: "20",
      description: "Home Work",
      completed: false
   },
   {
      id: "30",
      description: "Lern English",
      completed: true
   },
   {
      id: "624a",
      description: "",
      completed: false
   },
   {
      id: "0dasdf9",
      description: "Jump in the market",
      completed: false
   },
   {
      id: "94esef1",
      description: "",
      completed: false
   },
   {
      id: "10dsfs",
      description: "Drink Water",
      completed: true
   },
   {
      id: "20sd",
      description: "Home Work",
      completed: false
   },
   {
      id: "30df",
      description: "Lern English",
      completed: true
   },
   {
      id: "624fda",
      description: "",
      completed: false
   },
   {
      id: "0dsdca9",
      description: "Jump in the market",
      completed: false
   },
   {
      id: "94asdf1",
      description: "",
      completed: false
   }
  ];
}
