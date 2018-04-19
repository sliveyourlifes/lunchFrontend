import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Dish } from '../models/dish';

@Injectable()
export class LunchApiService {

  constructor(private http: HttpClient) { }

  getMenu(): Observable<Dish[]> {
    return this.http
    .get('/api/v1/lunch')
    .map(data => {
      console.log('data', data);
      return data.map(dish => new Dish(dish));
    })
    .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

}

