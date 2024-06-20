import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = 'https://rickandmortyapi.com/api/character';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {
  avatar: any = {};

  constructor(private http: HttpClient) {
    this.getOne(Math.floor(Math.random() * 826)).subscribe({
      next: (avatarApi: any) => {
        this.avatar = avatarApi;
        console.log(avatarApi);
      },
      error: (error) => console.log('Error fetching avatar', error),
      complete: () => console.log('Avatar Done'),
    });
  }

  getOne(id: number): Observable<any> {
    return this.http.get<any>(`${BASE_URL}/${id}`);
  }

  getAvatarImage(): string {
    return this.avatar.image;
  }

  setAvatar(avatar: any) {
    this.avatar = avatar;
  }
}
