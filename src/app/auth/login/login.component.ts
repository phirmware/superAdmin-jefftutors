import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

interface LoginResponse {
  token: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  error: boolean;

  constructor(private service: LoginService, private router: Router) { }

  ngOnInit() {
  }

  changeBarTitle() {
    return 'Login';
  }

  login(email: string, password: string) {
    if (!email || !password) {
      this.error = true;
      return;
    }
    this.service.login({email, password}).subscribe((response: LoginResponse) => {
      localStorage.setItem('token', response.token);
      this.router.navigate(['/overview']);
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

}
