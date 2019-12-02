import { Component, OnInit } from '@angular/core';
import { NavigationProperties } from 'src/app/lib/nav-interface';
import { NewService } from './new.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private service: NewService, private router: Router) { }

  changeBarTitle() {
    const navProperties: NavigationProperties[] = [
      {
        back: false,
        title: 'Courses',
        route: '/courses/list'
      },
      {
        back: true,
        title: 'Add Course',
      }
    ];
      return navProperties;
  }

  addACourse(course_name: string, course_code: string, course_price: string, number_of_courses: string,
     course_description: string, course_content: string ) {
    const credentials = {
      course_name,
      course_code,
      course_price,
      number_of_courses: Number(number_of_courses),
      course_description,
      course_content: course_content.split(','),
      token: localStorage.getItem('token')
    };
    this.service.createCourse(credentials).subscribe(response => {
      console.log(response);
      this.router.navigate(['/courses/list']);
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
