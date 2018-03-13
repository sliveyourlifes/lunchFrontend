import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class ProfileService {

  constructor(private _http: HttpClient) { }

  getUsers() {
    return this._http.get('/api/v1/users');
  }

}
