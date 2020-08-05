import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationProperties } from 'src/app/shared/interfaces/nav-interface';
import { DetailsService } from '../details/details.service';
import { HttpErrorResponse } from '@angular/common/http';
import { EditService } from './edit.service';

export interface CourseDetails {
  course_name: string;
  course_code: string;
  course_price: string;
  number_of_courses: number;
  course_content: string[];
  course_description: string;
  token: string;
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: string;
  courseName: string;

  course_name: string;
  course_code: string;
  course_price: string;
  number_of_courses: number;
  course_content: string;
  course_description: string;

  constructor(private route: ActivatedRoute,
    private courseDetailsService: DetailsService,
    private service: EditService, private router: Router) { }

  ngOnInit() {
  }

  beforeNavigationProperties() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.courseName = params['name'];
      this.getCourseDetails();
    });
  }

  getCourseDetails() {
    this.courseDetailsService.getCourseDetails(this.id).subscribe((response: CourseDetails) => {
      this.course_code = response.course_code;
      this.course_content = response.course_content.join(',');
      this.course_description = response.course_description;
      this.course_name = response.course_name;
      this.course_price = response.course_price;
      this.number_of_courses = response.number_of_courses;
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

  editCourse() {
    const obj: CourseDetails = {
      course_name: this.course_name,
      course_code: this.course_code,
      course_price: this.course_price,
      course_description: this.course_description,
      course_content: this.course_content.split(','),
      number_of_courses: this.number_of_courses,
      token: localStorage.getItem('token')
    };
    this.service.editCourse(this.id, obj).subscribe(response => {
      this.router.navigate(['/courses/course'], {
        queryParams: {
          id: this.id,
          name: this.courseName
        }
      });
    }, (error: HttpErrorResponse) => {
      console.log(error);
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
        route: '/courses/course',
        queryParams: {
          id: this.id,
          name: this.courseName
        }
      },
      {
        back: true,
        title: 'Edit',
      }
    ];
      return navProperties;
  }

}
