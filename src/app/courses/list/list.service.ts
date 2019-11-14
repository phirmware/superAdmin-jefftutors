import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  url = environment.url;
  baseUrl = environment.base;

  constructor(private http: HttpClient) { }

  getAllCourses() {
    return this.http.get(`${this.baseUrl}courses`);
  }
}
