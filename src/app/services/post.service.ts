import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private http = inject(HttpClient);

  getPosts(): Observable<any> {
    return this.http.get(BASE_URL);
  }
}
