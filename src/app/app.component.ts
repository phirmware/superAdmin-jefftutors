import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './auth/login/login.service';
import { NavigationProperties } from './shared/interfaces/nav-interface';
import { navLinks } from './shared/interfaces/nav-link-interface';
import { StorageService } from './shared/services/storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: NavigationProperties[];
  navLinks = navLinks;

  constructor(private router: Router, private loginService: LoginService, private storageService: StorageService) { }

  async changeBarTitle(component: any) {
    await component.beforeNavigationProperties();
    this.title = component.changeBarTitle();
  }

  isLoggedIn() {
    return this.loginService.isLoggedIn();
  }

  navigate(header: string, query?: any) {
    if (!this.isLoggedIn()) {
      this.router.navigate(['/auth']);
      return;
    } else if (!header) {
      return;
    }
    this.router.navigate([`${header}`], { queryParams: query });
  }

  logOut() {
    this.storageService.removeStorageToken();
    this.router.navigate(['/auth/login']);
  }

}
