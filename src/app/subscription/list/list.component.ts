import { Component, OnInit } from '@angular/core';
import { NavigationProperties } from 'src/app/lib/nav-interface';
import { ListService } from './list.service';
import { HttpErrorResponse } from '@angular/common/http';

interface ServerResponse {
  data: object;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  loading = false;
  subscriptions: any;

  constructor(private service: ListService) { }

  ngOnInit() {
    this.getSubscriptions();
  }

  changeBarTitle() {
    const navProperties: NavigationProperties[] = [
      {
        back: false,
        title: 'Subscrptions',
        route: '/subscription/list'
      }
    ];
      return navProperties;
  }

  getSubscriptions() {
    this.loading = true;
    this.service.getSubscriptions().subscribe(response => {
      this.subscriptions = response;
      this.loading = false;
    });
  }

  deleteSubscription(id: string) {
    this.service.deleteSubscriptions(id).subscribe((response: ServerResponse) => {
      const elem = Array.from(document.querySelector('mat-accordion').children);
      elem.forEach((x: any) => {
        const shouldShow = x.textContent.indexOf(id) > -1;
        x.style.display = shouldShow ? 'none' : 'block';
      });
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

}
