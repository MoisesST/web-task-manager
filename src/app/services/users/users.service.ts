import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';

import { IUser } from '../../interfaces/user';

const BASE_URL = 'http://localhost:8000/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  async create(user: IUser): Promise<any> {
    try {
      return await lastValueFrom(this.http.post(BASE_URL, user));
    } catch (error) {
      console.log('Create error', error);
    }
  }

  getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>(BASE_URL);
  }

  async post(data: any): Promise<any> {
    try {
      const response = await lastValueFrom(this.http.post(BASE_URL, data));
      return response;
    } catch (error) {
      throw error;
    }
  }

  put(id: string, data: any): Observable<any> {
    const url = `${BASE_URL}/${id}`;
    return this.http.put<any>(url, data);
  }

  delete(id: string): Observable<any> {
    const url = `${BASE_URL}/${id}`;
    return this.http.delete<any>(url);
  }

  getId(id: string): Observable<any> {
    const url = `${BASE_URL}/${id}`;
    return this.http.get<any>(url);
  }

  // getOne(id: number): Observable<ITask> {
  //   return this.http.get<ITask>(`${BASE_URL}/${id}`);
  // }

  getEmail(email: string | null): Observable<any> {
    const url = `${BASE_URL}/?email=${email}`;
    return this.http.get<any>(url);
  }
}
