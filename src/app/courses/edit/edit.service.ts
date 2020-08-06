import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CourseDetails } from 'src/app/shared/interfaces/course-details-request.interface';


@Injectable({
  providedIn: 'root'
})
export class EditService {

  url = environment.url;

  constructor(private http: HttpClient) { }

  editCourse(id: string, credentials: CourseDetails) {
    return this.http.post(`${this.url}course/${id}/edit`, credentials);
  }
}
