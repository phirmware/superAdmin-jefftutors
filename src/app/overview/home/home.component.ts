import { Component, OnInit } from '@angular/core';
import { ListService } from '../../courses/list/list.service';
import { ListService as Clist } from '../../customers/list/list.service';
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
  coursesLoading = false;
  customerLoading = false;

  constructor(private courseListService: ListService, private customerListService: Clist ) { }

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
  }

}
