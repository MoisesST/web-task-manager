import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LinkButtonComponent } from '../../elements/link-button/link-button.component';
import { SvgIconComponent } from '../../elements/svg-icon/svg-icon.component';
import { StorageService } from '../../../services/users/storage.service';
import { Icons } from '../../../utils/icons';
import { AvatarService } from '../../../services/avatar/avatar.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LinkButtonComponent, SvgIconComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  HOME = Icons.HOME;
  CREATE = Icons.CREATE;
  TASKS = Icons.TASKS;
  LOGOUT = Icons.LOGOUT;
  MENU_HAMBURGER = Icons.MENU_HAMBURGER;
  logged = false;
  showMenu = false;
  avatar: any = {};
  image: string = '';

  constructor(
    private storageService: StorageService,
    private avatarService: AvatarService,
    private router: Router,
  ) {
    this.logged = storageService.isLoggedIn();
  }

  getImage() {
    return this.avatarService.getAvatarImage();
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  onLogout(): void {
    this.storageService.clean();
    this.router.navigate(['/']);
    setTimeout(() => {
      location.reload();
    }, 1000);
  }
}
