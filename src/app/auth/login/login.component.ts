import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NavigationProperties } from 'src/app/shared/interfaces/nav-interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StorageService } from '../../shared/services/storage.service';

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
  fetching = false;

  constructor(private service: LoginService,
    private router: Router, private _snackBar: MatSnackBar, private storageService: StorageService) { }

  ngOnInit() {
  }

  beforeNavigationProperties() { }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  changeBarTitle() {
    const navProperties: NavigationProperties[] = [
      {
        back: false,
        title: 'Login',
        route: '/auth/login'
      }
    ];
    return navProperties;
  }

  login(email: string, password: string) {
    if (!email || !password) {
      this.error = true;
      this.openSnackBar('You are missing something', 'Check the form');
      return;
    }
    this.fetching = true;
    this.service.login({ email, password }).subscribe((response: LoginResponse) => {
      this.storageService.setStorageToken(response);
      this.router.navigate(['/overview']);
    }, (error) => {
      this.fetching = false;
      this.openSnackBar(error, 'close');
    });
  }

}
