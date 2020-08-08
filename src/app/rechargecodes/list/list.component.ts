import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/rechargecodes/list/list.service';
import { NavigationProperties } from 'src/app/shared/interfaces/nav-interface';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PathnameService } from 'src/app/shared/services/pathname.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  loading = false;
  codes: any;

  beforeNavigationProperties() { }
  changeBarTitle() {
    const navProperties: NavigationProperties[] = [
      {
        back: false,
        title: 'Codes',
        route: this.pathNameService.CODES_PATH.root,
      },
      {
        back: true,
        title: 'List',
      }
    ];
    return navProperties;
  }

  constructor(private service: ListService, private router: Router, private snackBar: MatSnackBar,
    private pathNameService: PathnameService
  ) { }

  ngOnInit() {
    this.showCodes();
  }

  showCodes() {
    this.loading = true;
    this.service.showCodes().subscribe(_response => {
      this.loading = false;
      this.codes = _response;
    }, (error) => {
      this.loading = false;
      this.snackBar.open(error, 'close');
    });
  }

  deleteCode(id: string) {
    this.service.deleteCode(id).subscribe(response => {
      const ids = this.codes.map((item: { _id: string }) => {
        return item._id;
      });
      this.codes.splice(ids.indexOf(id), 1);
    }, (error) => {
      this.snackBar.open(error, 'close');
    });
  }

}
