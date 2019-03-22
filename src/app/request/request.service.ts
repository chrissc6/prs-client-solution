import { Injectable } from '@angular/core';

import{HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';
import {Request} from './request.class';

const url = "http://localhost:52132/api";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  list(): Observable<Request[]>{
    return this.http.get(`${url}/requests`) as Observable<Request[]>;
  }
  get(id:string): Observable<Request>{
    return this.http.get(`${url}/requests/${id}`) as Observable<Request>;
  }
  create(request:Request): Observable<any>{
    return this.http.post(`${url}/requests/`, request) as Observable<any>;
  }
  change(request:Request): Observable<any>{
    return this.http.put(`${url}/requests/${request.id}`, request) as Observable<any>;
  }
  remove(request:Request): Observable<any>{
    return this.http.delete(`${url}/requests/${request.id}`) as Observable<any>;
  }
  listReview(): Observable<Request[]>{
    return this.http.get(`${url}/requests/review`) as Observable<Request[]>;
  }
  review(request:Request): Observable<any>{
    return this.http.put(`${url}/requests/review/${request.id}`, request) as Observable<any>;
  }

  constructor(private http:HttpClient) { }
}
