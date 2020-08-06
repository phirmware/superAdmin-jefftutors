import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CourseDetails } from 'src/app/shared/interfaces/course-details-request.interface';

@Injectable({
  providedIn: 'root'
})
export class NewService {

  url = environment.url;

  constructor(private http: HttpClient) { }

  createCourse(credentials: CourseDetails) {
    return this.http.post(`${this.url}course`, credentials);
  }

}
