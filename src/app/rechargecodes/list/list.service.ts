import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  url = environment.url;

  constructor(private _http: HttpClient) { }

  showCodes() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': localStorage.getItem('token')
      })
    };
    return this._http.get(`${this.url}rechargecode/list`, httpOptions);
  }

  deleteCode(id: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': localStorage.getItem('token')
      })
    };
    return this._http.delete(`${this.url}rechargecode/${id}`, httpOptions);
  }
}
