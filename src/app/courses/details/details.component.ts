import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailsService } from './details.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NavigationProperties } from 'src/app/shared/interfaces/nav-interface';
import { PathnameService } from 'src/app/shared/services/pathname.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: string;
  loading = false;
  course: any;
  videos: any[];
  courseName: string;
  deleteCount = 0;
  EDIT_COURSE_PATH: string;

  constructor(private route: ActivatedRoute, private service: DetailsService, private router: Router,
    private pathNameService: PathnameService, private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.EDIT_COURSE_PATH = this.pathNameService.COURSES_PATH.edit;
  }

  beforeNavigationProperties() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.courseName = params['name'];
      this.getCourseDetails();
    });
  }

  changeBarTitle() {
    const navProperties: NavigationProperties[] = [
      {
        back: false,
        title: 'Courses',
        route: this.pathNameService.COURSES_PATH.list,
      },
      {
        back: true,
        title: this.courseName,
      }
    ];
    return navProperties;
  }

  getCourseDetails() {
    this.loading = true;
    this.service.getCourseDetails(this.id).subscribe(response => {
      this.course = response;
      this.courseName = this.course.course_name;
      this.videos = this.course.course_content;
      this.loading = false;
    }, (error) => {
      this.loading = false;
      this.snackBar.open(error, 'close');
    });
  }

  deleteCourse(id: string) {
    if (this.deleteCount < 5) {
      this.deleteCount++;
      return;
    }
    this.service.deleteCourse(id).subscribe(response => {
      this.router.navigate([this.pathNameService.COURSES_PATH.list]);
    }, (error) => {
      this.snackBar.open(error, 'close');
    });
  }

}
