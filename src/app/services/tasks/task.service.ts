import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';

import { ITask } from '../../interfaces/task';

const BASE_URL = 'http://localhost:8000/tasks';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}

  // create(task: ITask): Observable<ITask> {
  //   return this.http.post<ITask>(BASE_URL, task);
  // }

  async create(task: ITask): Promise<any> {
    try {
      return await lastValueFrom(this.http.post(BASE_URL, task));
    } catch (error) {
      console.log('Error', error);
    }
  }

  getAll(): Observable<ITask[]> {
    return this.http.get<ITask[]>(BASE_URL);
  }

  getOne(id: string): Observable<ITask> {
    return this.http.get<ITask>(`${BASE_URL}/${id}`);
  }

  update(task: ITask): Observable<ITask> {
    return this.http.put<ITask>(`${BASE_URL}/${task.id}`, task);
  }

  delete(task: ITask): Observable<any> {
    return this.http.delete<any>(`${BASE_URL}/${task.id}`);
  }
}
