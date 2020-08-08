import { Component, OnInit } from '@angular/core';
import { NavigationProperties } from '../../shared/interfaces/nav-interface';
import { GenerateService } from './generate.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent implements OnInit {
  responseArray: any;
  generatedCodes = [];
  loading = false;
  fetching = false;
  color = 'accent';
  checked = false;

  beforeNavigationProperties() { }
  changeBarTitle() {
    const navProperties: NavigationProperties[] = [
      {
        back: false,
        title: 'Codes',
        route: '/'
      }
    ];
    return navProperties;
  }

  constructor(private service: GenerateService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  generateCodes() {
    this.loading = true;
    this.service.generateCodes().subscribe(async _res => {
      this.responseArray = _res;
      await this.addCodePeriodically();
      this.loading = false;
    }, (error) => {
      this._snackBar.open(error, 'Close');
      this.loading = false;
    });
  }

  async addCodePeriodically() {
    for (let i = 0; i < this.responseArray.length; i++) {
      await this.addCodeToArray(i);
    }
  }

  addCodeToArray(i: number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.generatedCodes.push(this.responseArray[i]);
        resolve('1');
      }, 3000);
    });
  }

  registerCode(code: string) {
    const valid = this.generatedCodes.indexOf(code) !== -1 ? true : false;
    if (!valid) {
      return;
    }
    this.service.registerCode(code).subscribe(_response => {
    }, (error) => {
      this._snackBar.open(error, 'close');
    });
  }
}
