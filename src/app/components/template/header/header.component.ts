import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LinkButtonComponent } from '../../elements/link-button/link-button.component';
import { SvgIconComponent } from '../../elements/svg-icon/svg-icon.component';
import { StorageService } from '../../../services/user/storage.service';
import { Icons } from '../../../utils/icons';

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

  constructor(private storageService: StorageService, private router: Router) {
    this.logged = storageService.isLoggedIn();
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  onLogout(): void {
    this.storageService.clean();
    this.router.navigate(['/login']);
    setTimeout(() => {
      location.reload();
    }, 1000);
  }
}
