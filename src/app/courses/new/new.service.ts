import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

interface NewCourse {
  course_name: string;
  course_code: string;
  course_price: string;
  number_of_courses: number;
  course_description: string;
  course_content: string[];
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class NewService {

  url = environment.url;

  constructor(private http: HttpClient) { }

  createCourse(credentials: NewCourse) {
    return this.http.post(`${this.url}course`, credentials);
  }

}
