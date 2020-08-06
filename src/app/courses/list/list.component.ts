import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NavigationProperties } from 'src/app/shared/interfaces/nav-interface';
import { PathnameService } from '../../shared/services/pathname.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  courses: any;
  loading = false;

  constructor(private service: ListService, private pathNameService: PathnameService) { }

  ngOnInit() {
    this.getAllCourses();
  }

  beforeNavigationProperties() { }
  changeBarTitle() {
    const navProperties: NavigationProperties[] = [
      {
        back: false,
        title: 'Courses',
        route: this.pathNameService.COURSES_PATH.list,
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
