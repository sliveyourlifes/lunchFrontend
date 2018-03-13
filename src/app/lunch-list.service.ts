import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class LunchListService {

  constructor(private _http: HttpClient) { }

  getLunch() {
    return this._http.get('/api/v1/lunch');
  }

}
