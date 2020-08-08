import { Component, OnInit } from '@angular/core';
import { NavigationProperties } from 'src/app/shared/interfaces/nav-interface';
import { ListService } from './list.service';
import { filterFunction } from 'src/app/lib/search';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PathnameService } from 'src/app/shared/services/pathname.service';

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
  fetching = false;

  constructor(private service: ListService, private snackBar: MatSnackBar, private pathNameService: PathnameService) { }

  ngOnInit() {
    this.getSubscriptions();
  }

  beforeNavigationProperties() { }
  changeBarTitle() {
    const navProperties: NavigationProperties[] = [
      {
        back: false,
        title: 'Subscrptions',
        route: this.pathNameService.SUBSCRIPTION_PATH.list,
      }
    ];
    return navProperties;
  }

  filter(value: string) {
    const element = Array.from(document.getElementsByTagName('mat-expansion-panel'));
    filterFunction(element, value);
  }

  getSubscriptions() {
    this.loading = true;
    this.service.getSubscriptions().subscribe(response => {
      this.subscriptions = response;
      this.loading = false;
    }, (error) => {
      this.snackBar.open(error, 'close');
    });
  }

  deleteSubscription(id: string) {
    this.fetching = true;
    this.service.deleteSubscriptions(id).subscribe((response: ServerResponse) => {
      const ids = this.subscriptions.map((item: { _id: string; }) => {
        return item._id;
      });
      this.subscriptions.splice(ids.indexOf(id), 1);
      this.fetching = false;
    }, (error) => {
      this.snackBar.open(error, 'close');
      this.fetching = false;
    });
  }

}
