import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class LunchListService {

  constructor(private http: HttpClient) { }

  getLunch() {
    return this.http.get('/api/v1/lunch');
  }

}
