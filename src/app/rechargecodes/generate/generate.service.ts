import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenerateService {

  url = environment.url;

  constructor(private _http: HttpClient) { }

  generateCodes() {
    return this._http.get(`${this.url}rechargecode`);
  }

  registerCode(code: string) {
    return this._http.post(`${this.url}rechargecode`, { code });
  }
}
