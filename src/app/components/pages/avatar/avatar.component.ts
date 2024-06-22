import { Component, OnInit } from '@angular/core';

import { TitleComponent } from '../../elements/title/title.component';
import { AvatarService } from '../../../services/avatar/avatar.service';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [TitleComponent],
  template: `
    <div class="flex justify-center items-center h-20">
      <app-title name="Avatar" />
    </div>

    <div class="flex justify-center items-center w-full mt-10">
      <img [src]="avatar.image" alt="Avatar" class="rounded-full">
    </div>

    <div class="flex flex-col gap-4 mt-10">
      <button
        (click)="generateRandomAvatar()"
        class="
          w-full h-10 font-medium rounded bg-sky-500 hover:bg-sky-600 transition-all
        "
      >
        Generate
      </button>
      <span class="text-center">And</span>
      <button
        (click)="changeAvatar()"
        class="
          w-full h-10 font-medium rounded bg-sky-500 hover:bg-sky-600 transition-all
        "
      >
        Change
      </button>
    </div>
  `,
})
export class AvatarComponent implements OnInit {
  avatar: any = {};

  constructor(private avatarService: AvatarService) {}

  ngOnInit(): void {
    this.loadAvatar();
  }

  loadAvatar(): void {
    this.avatarService.getOne(this.randomNumber()).subscribe({
      next: (avatarApi: any) => {
        this.avatar = avatarApi;
        console.log(avatarApi);
      },
      error: (error) => console.log('Error fetching avatar', error),
      complete: () => console.log('Avatar Done'),
    });
  }

  generateRandomAvatar(): void {
    this.loadAvatar();
  }

  changeAvatar(): void {
    this.avatarService.setAvatar(this.avatar);
  }

  randomNumber(): number {
    return Math.floor(Math.random() * 826)
  }
}
