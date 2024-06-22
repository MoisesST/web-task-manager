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
}
