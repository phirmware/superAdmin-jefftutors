import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  panelOpenState = false;
  courses: any;
  loading = false;

  constructor(private service: ListService) { }

  ngOnInit() {
    this.getAllCourses();
  }

  changeBarTitle() {
    return 'Courses List';
  }

  getAllCourses() {
    this.loading = true;
    this.service.getAllCourses().subscribe(response => {
      this.courses = response;
      this.loading = false;
    }, (error: HttpErrorResponse) => {
      console.log(error);
      this.loading = false;
    });
  }

}
