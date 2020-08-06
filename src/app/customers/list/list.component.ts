import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavigationProperties } from 'src/app/shared/interfaces/nav-interface';
import { filterFunction } from 'src/app/lib/search';
import { PathnameService } from 'src/app/shared/services/pathname.service';


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

  dataSource: any;
  loading = false;
  durationInSeconds = 3;

  constructor(private service: ListService, private _snackBar: MatSnackBar,
    private pathNameService: PathnameService,
  ) { }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 4000,
    });
  }

  beforeNavigationProperties() { }
  changeBarTitle() {
    const navProperties: NavigationProperties[] = [
      {
        back: false,
        title: 'Customers',
        route: this.pathNameService.CUSTOMERS_PATH.list
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
