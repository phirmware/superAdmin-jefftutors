import { Component, OnInit } from '@angular/core';
import { ListService } from '../../courses/list/list.service';
import { ListService as Clist } from '../../customers/list/list.service';
import { HttpErrorResponse } from '@angular/common/http';

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

  constructor(private courseListService: ListService, private customerListService: Clist ) { }

  ngOnInit() {
    const token = localStorage.getItem('token');

    this.courseListService.getAllCourses().subscribe(response => {
      this.courses = response;
      this.numberOfCourses = this.courses.length;
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });

    this.customerListService.getAllCustomers(token).subscribe(response => {
      this.customers = response;
      this.numberOfCustomers = this.customers.length;
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

}
