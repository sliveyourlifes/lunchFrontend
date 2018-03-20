import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class ProfileService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('/api/v1/users');
  }

}
