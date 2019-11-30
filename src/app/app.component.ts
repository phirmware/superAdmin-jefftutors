import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './auth/login/login.service';
import { NavigationProperties } from './lib/nav-interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: NavigationProperties[];
  showFiller = false;

  constructor(private router: Router, private loginService: LoginService) {}

  changeBarTitle(component: any) {
    this.title = component.changeBarTitle();
  }

  navigate(header: string) {
    if (!this.loginService.isLoggedIn()) {
      this.router.navigate(['/auth']);
      return;
    } else if (!header) {
      return;
    }
    this.router.navigate([`${header}`]);
  }

}
