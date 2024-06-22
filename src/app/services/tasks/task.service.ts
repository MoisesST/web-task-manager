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
    return await lastValueFrom(this.http.post(BASE_URL, task));
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

  delete(id: string): Observable<any> {
    return this.http.delete<any>(`${BASE_URL}/${id}`);
  }
}
