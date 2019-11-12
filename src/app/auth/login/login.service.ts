import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = environment.url;

  constructor(private http: HttpClient) { }

  login(credentials: {email: string, password: string}) {
    return this.http.post(`${this.url}authenticate`, credentials);
  }

}
