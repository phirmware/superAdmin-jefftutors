import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ListService } from 'src/app/rechargecodes/list/list.service';
import { NavigationProperties } from 'src/app/lib/nav-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  loading = false;
  codes: any;

  beforeNavigationProperties() {}
  changeBarTitle() {
    const navProperties: NavigationProperties[] = [
      {
        back: false,
        title: 'Codes',
        route: '/codes'
      },
      {
        back: true,
        title: 'List',
      }
    ];
    return navProperties;
  }

  constructor(private service: ListService, private router: Router) { }

  ngOnInit() {
    this.showCodes();
  }

  showCodes() {
    this.loading = true;
    this.service.showCodes().subscribe(_response => {
      this.loading = false;
      console.log(_response);
      this.codes = _response;
    }, (error: HttpErrorResponse) => {
      this.loading = false;
    });
  }

  deleteCode(id: string) {
    this.service.deleteCode(id).subscribe(response => {
      this.router.navigate(['/codes']);
    }, (error: HttpErrorResponse) => {});
  }

}
