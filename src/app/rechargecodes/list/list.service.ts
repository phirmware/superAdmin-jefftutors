import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  url = environment.url;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'x-access-token': localStorage.getItem('token')
    })
  };

  constructor(private _http: HttpClient) { }

  showCodes() {
    return this._http.get(`${this.url}rechargecode/list`, this.httpOptions);
  }

  deleteCode(id: string) {
    return this._http.delete(`${this.url}rechargecode/${id}`, this.httpOptions);
  }
}
