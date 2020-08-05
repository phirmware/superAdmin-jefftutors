import { Component, OnInit } from '@angular/core';
import { NavigationProperties } from 'src/app/shared/interfaces/nav-interface';
import { NewService } from './new.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private service: NewService, private router: Router, private snackBar: MatSnackBar) { }

  beforeNavigationProperties() {}
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

  openSnackbar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000
    });
  }

  addACourse(course_name: string, course_code: string, course_price: string, number_of_courses: string,
     course_description: string, course_content: string ) {
    if (!course_name || !course_code || !course_price || !number_of_courses || !course_description || !course_content) {
      this.openSnackbar('Fill in all inputs', 'close');
      return;
    }
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
      this.router.navigate(['/courses/list']);
    }, (error: HttpErrorResponse) => {
      this.openSnackbar('An error ocurred', 'close');
    });
  }

  ngOnInit() {
  }

}
