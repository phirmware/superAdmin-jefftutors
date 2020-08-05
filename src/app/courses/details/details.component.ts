import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailsService } from './details.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NavigationProperties } from 'src/app/shared/interfaces/nav-interface';

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

  constructor(private route: ActivatedRoute, private service: DetailsService, private router: Router) { }

  ngOnInit() {
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
        route: '/courses/list'
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
    }, (error: HttpErrorResponse) => {
      this.loading = false;
    });
  }

  deleteCourse(id: string) {
    if (this.deleteCount < 5) {
      this.deleteCount ++;
      return;
    }
    this.service.deleteCourse(id).subscribe(response => {
      console.log(response);
      this.router.navigate(['/courses/list']);
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

}
