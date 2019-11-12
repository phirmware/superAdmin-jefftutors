import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  url = environment.url;

  constructor(private http: HttpClient) { }

  getAllCustomers(token: string) {
    return this.http.post(`${this.url}users`, {token});
  }
}
