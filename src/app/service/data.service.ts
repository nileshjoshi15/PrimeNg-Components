import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from './city';
import { Observable } from 'rxjs/Rx';




@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getLossType():Observable<City[]>{
    return this.http.get<City[]>('http://localhost:5000/api/values');
  }
}
