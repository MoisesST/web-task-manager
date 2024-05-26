import { Component } from '@angular/core';

import { TaskComponent } from '../../../elements/task/task.component';
import { NoTasksComponent } from '../../../template/no-tasks/no-tasks.component';
import { TitleComponent } from '../../../elements/title/title.component';
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-list-task',
  standalone: true,
  imports: [TitleComponent, TaskComponent, NoTasksComponent, FormsModule, NgForOf, NgIf],
  templateUrl: './list-tasks.component.html',
})
export class ListTasksComponent {

  categories: any;

  getCategories = async () => {
    const response = await fetch('http://localhost:8000/categories');
    const data = await response.json();
    return data;
  }

  //create function to post category

  categoryName: string = '';

  async addCategory() {
    if (this.categoryName.trim()) {
      const newCategory = { name: this.categoryName };
      const response = await fetch('http://localhost:8000/categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCategory),
      });

      if (response.ok) {
        const data = await response.json();
        this.getCategories().then((data: any) => {
          this.categories = data;
        }).catch((error: any) => {
          console.error(error);
        })
        this.categoryName = '';
      } else {
        console.error('Erro ao adicionar categoria:', response.statusText);
      }
    }
  }

  ngOnInit() {
    this.getCategories().then((data: any) => {
      this.categories = data;
    }).catch((error: any) => {
      console.error(error);
    })
  }
}
