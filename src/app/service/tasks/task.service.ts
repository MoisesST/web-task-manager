import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ITask } from '../../interfaces/task';

const BASE_URL = 'http://localhost:8000/tasks';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}

  get(): Observable<ITask> {
    return this.http.get<ITask>(BASE_URL);
  }

  post(body: ITask) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post(BASE_URL, body, { headers }).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  put() {}

  delete() {}
}
