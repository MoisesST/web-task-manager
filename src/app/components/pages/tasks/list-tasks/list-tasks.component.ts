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

  categories: any;

  getCategories = async () => {
    const response = await fetch('http://localhost:8000/categories');
    const data = await response.json();
    return data;
  }

  ngOnInit() {
    this.getCategories().then((data: any) => {
      this.categories = data;
    }).catch((error: any) => {
      console.error(error);
    })
  }
}
