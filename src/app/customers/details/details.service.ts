import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  url = environment.url;

  constructor(private http: HttpClient) { }

  getCustomer(id: string) {
    const token = localStorage.getItem('token');
    return this.http.post(`${this.url}user/${id}`, {token});
  }

  editCustomer(credentials: {username: string, email: string, token: string}, id: string) {
    return this.http.post(`${this.url}user/${id}/update`, credentials);
  }

  deleteCustomer(id: string) {
    const token = localStorage.getItem('token');
    return this.http.post(`${this.url}user/${id}/delete`, {token});
  }

  addCourseToCustomer(credentials: { username: string, token: string, course_code: string }) {
    return this.http.post(`${this.url}course/add`, credentials);
  }

}
