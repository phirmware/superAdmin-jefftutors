import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from './auth/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor( private router: Router, private service: LoginService) { }

  canActivate() {
    if (this.service.isLoggedIn()) { return true; }
    this.router.navigate(['/auth']);
    return false;
  }
}
