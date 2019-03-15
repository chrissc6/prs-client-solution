import { Injectable } from '@angular/core';

import{HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';
import { User } from './user.class';

const url = "http://localhost:52132/api";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  list(): Observable<User[]>{
    return this.http.get(`${url}/users`) as Observable<User[]>;
  }
  get(id:string): Observable<User>{
    return this.http.get(`${url}/users/${id}`) as Observable<User>;
  }

  constructor(private http: HttpClient) { }
}
