import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NavigationProperties } from 'src/app/shared/interfaces/nav-interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  courses: any;
  loading = false;

  constructor(private service: ListService) { }

  ngOnInit() {
    this.getAllCourses();
  }

  beforeNavigationProperties() {}
  changeBarTitle() {
    const navProperties: NavigationProperties[] = [
      {
        back: false,
        title: 'Courses',
        route: '/courses/list'
      }
    ];
      return navProperties;
  }

  getAllCourses() {
    this.loading = true;
    this.service.getAllCourses().subscribe(response => {
      this.courses = response;
      this.loading = false;
    }, (error: HttpErrorResponse) => {
      this.loading = false;
    });
  }

}
