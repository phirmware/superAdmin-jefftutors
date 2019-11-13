import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';
import { HttpErrorResponse } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';


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

  ngOnInit() {
    this.loading = true;
    this.service.getAllCustomers(localStorage.getItem('token')).subscribe(response => {
      console.log(response);
      this.dataSource = response;
      this.loading = false;
    }, (error: HttpErrorResponse) => {
      this.loading = false;
      this.openSnackBar(error.error.message, 'close');
      this.dataSource = [];
    });
  }

}
