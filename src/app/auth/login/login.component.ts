import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

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

  login(email: string, password: string) {
    if (!email || !password) {
      this.error = true;
      return;
    }
    this.service.login({email, password}).subscribe((response: LoginResponse) => {
      console.log(response);
      localStorage.setItem('token', response.token);
      this.router.navigate(['/overview']);
    });
  }

}
