import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  url = environment.url;

  constructor(private http: HttpClient) { }

  getCourseDetails(id: string) {
    const token = localStorage.getItem('token');
    return this.http.post(`${this.url}course/${id}`, {token});
  }

  deleteCourse(id: string) {
    const token = localStorage.getItem('token');
    return this.http.post(`${this.url}course/${id}/delete`, {token});
  }

}
