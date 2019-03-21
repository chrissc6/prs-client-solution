import { Injectable } from '@angular/core';

import{HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';
import{RequestLine} from './requestLine.class';

const url = "http://localhost:52132/api";

@Injectable({
  providedIn: 'root'
})
export class RequestLineService {
  list(): Observable<RequestLine[]>{
    return this.http.get(`${url}/requestlines`) as Observable<RequestLine[]>;
  }
  get(id:string): Observable<RequestLine>{
    return this.http.get(`${url}/requestlines/${id}`) as Observable<RequestLine>;
  }
  create(requestLine:RequestLine): Observable<any>{
    return this.http.post(`${url}/requestlines/`, requestLine) as Observable<any>;
  }
  change(requestLine:RequestLine): Observable<any>{
    return this.http.put(`${url}/requestlines/${requestLine.id}`, requestLine) as Observable<any>;
  }
  remove(requestLine:RequestLine): Observable<any>{
    return this.http.delete(`${url}/requestlines/${requestLine.id}`) as Observable<any>;
  }

  constructor(private http: HttpClient) { }
}
