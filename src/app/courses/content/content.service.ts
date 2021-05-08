import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  url = environment.url;

  constructor(private http: HttpClient) { }

  updateCourseContent(id, data) {
    return this.http.post(`${this.url}course/content/${id}`, data)
  }
}
