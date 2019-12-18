import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenerateService {

  url = environment.url;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'x-access-token': localStorage.getItem('token')
    })
  };

  constructor(private _http: HttpClient) {}

  generateCodes() {
    return this._http.get(`${this.url}rechargecode`, this.httpOptions);
  }

  registerCode(code: string) {
    return this._http.post(`${this.url}rechargecode`, {code}, this.httpOptions);
  }
}