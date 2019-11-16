import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './auth/login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string;
  showFiller = false;

  constructor(private router: Router, private loginService: LoginService) {}

  changeBarTitle(component: any) {
    this.title = component.changeBarTitle();
  }

  navigate(header: string) {
    if (!this.loginService.isLoggedIn()) { return; }
    this.router.navigate([`${header}`]);
  }

}
