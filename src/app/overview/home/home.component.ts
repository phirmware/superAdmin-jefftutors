import { Component, OnInit } from '@angular/core';
import { ListService } from '../../courses/list/list.service';
import { ListService as CustomerListService } from '../../customers/list/list.service';
import { ListService as SubscriptionListService } from '../../subscription/list/list.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NavigationProperties } from '../../lib/nav-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  courses: any;
  numberOfCourses: number;
  customers: any;
  numberOfCustomers: number;
  subscriptions: any;
  numberOfSubscriptions: number;
  coursesLoading = false;
  customerLoading = false;
  subscriptionLoading = false;

  constructor(private courseListService: ListService, private customerListService: CustomerListService,
     private subscriptionList: SubscriptionListService ) { }

  beforeNavigationProperties() {}
  changeBarTitle() {
    const navProperties: NavigationProperties[] = [
    {
      back: false,
      title: 'Overview',
      route: '/'
    }
  ];
    return navProperties;
  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    this.coursesLoading = true;
    this.customerLoading = true;
    this.subscriptionLoading = true;

    this.courseListService.getAllCourses().subscribe(response => {
      this.courses = response;
      this.numberOfCourses = this.courses.length;
      this.coursesLoading = false;
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });

    this.customerListService.getAllCustomers(token).subscribe(response => {
      this.customers = response;
      this.numberOfCustomers = this.customers.length;
      this.customerLoading = false;
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });

    this.subscriptionList.getSubscriptions().subscribe(response => {
      this.subscriptions = response;
      this.numberOfSubscriptions = this.subscriptions.length;
      this.subscriptionLoading = false;
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

}
