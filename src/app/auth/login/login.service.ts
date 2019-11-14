import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = environment.url;
  helper = new JwtHelperService();

  constructor(private http: HttpClient) { }

  login(credentials: {email: string, password: string}) {
    return this.http.post(`${this.url}authenticate`, credentials);
  }

  isLoggedIn() {
    const token = localStorage.getItem('token');
    if (token) {
      const isTokenExpired = this.helper.isTokenExpired(token);
      if (isTokenExpired === true) {
        localStorage.removeItem('token');
      }
      return !isTokenExpired;
    }
    return false;
  }

}
