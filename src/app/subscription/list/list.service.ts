import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  url = environment.url;

  constructor(private http: HttpClient) { }

  getSubscriptions() {
    const token = localStorage.getItem('token');
    return this.http.post(`${this.url}subscriptions`, {token} );
  }

  deleteSubscriptions(id: string) {
    const token = localStorage.getItem('token');
    return this.http.post(`${this.url}subscriptions/${id}`, {token});
  }
}
