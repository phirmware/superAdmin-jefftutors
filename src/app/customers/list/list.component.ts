import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';
import { HttpErrorResponse } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import { NavigationProperties } from 'src/app/lib/nav-interface';
import { filterFunction } from 'src/app/lib/search';


export interface PeriodicElement {
  username: string;
  position: number;
  email: string;
  password: string;
  id: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['username', 'email', 'phone', 'id'];
  dataSource: any;
  loading = false;
  durationInSeconds = 3;

  constructor(private service: ListService, private _snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 4000,
    });
  }

  changeBarTitle() {
    const navProperties: NavigationProperties[] = [
      {
        back: false,
        title: 'Customers',
        route: '/customers'
      }
    ];
      return navProperties;
  }

  filter(value: string) {
    const element = Array.from(document.getElementsByTagName('tr'));
    filterFunction(element, value);
  }

  ngOnInit() {

    this.loading = true;
    this.service.getAllCustomers(localStorage.getItem('token')).subscribe(response => {
      this.dataSource = response;
      this.loading = false;
    }, (error: HttpErrorResponse) => {
      this.loading = false;
      this.openSnackBar(error.error.message, 'close');
      this.dataSource = [];
    });
  }

}
