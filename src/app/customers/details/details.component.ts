import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailsService } from './details.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: string;
  loading = false;
  user: any;
  panelOpenState = false;
  error = false;
  username: string;
  email: string;
  courses: any[];

  constructor(private route: ActivatedRoute, private router: Router, private service: DetailsService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.loading = true;
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.service.getCustomer(this.id).subscribe(response => {
        this.user = response;
        this.username = this.user.username;
        this.email = this.user.email;
        this.courses = this.user.courses;
        this.loading = false;
      }, (error: HttpErrorResponse) => {
        this.loading = false;
        this.openSnackBar(error.message, 'close');
        console.log(error);
      });
  });

  }

  changeBarTitle() {
    return 'Customer Details';
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  editCustomer() {
    const obj = {
      username: this.username,
      email: this.email,
      token: localStorage.getItem('token')
    };
    this.service.editCustomer(obj, this.id).subscribe(response => {
      this.router.navigate(['/customers']);
    }, (error: HttpErrorResponse) => {
      console.log(error);
      this.openSnackBar(error.message, 'close');
    });
  }

  addCourseToUser(coursecode: string) {
    if (!coursecode) {
      this.openSnackBar('Missing Course Code', 'close');
      return;
    }
    const obj = {
      username: this.username,
      course_code: coursecode,
      token: localStorage.getItem('token')
    };
    this.service.addCourseToCustomer(obj).subscribe(response => {
    }, (error: HttpErrorResponse) => {
      console.log(error);
      this.openSnackBar(error.error.statusText, 'close');
    });
  }

  deleteUser() {
    this.service.deleteCustomer(this.id).subscribe(response => {
      this.router.navigate(['/customers/list']);
    }, (error: HttpErrorResponse) => {
      console.log(error);
      this.openSnackBar('Failed', 'close');
    });
  }

}
