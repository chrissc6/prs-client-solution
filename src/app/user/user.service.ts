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
  create(user:User): Observable<any>{
    return this.http.post(`${url}/users/`, user) as Observable<any>;
  }
  change(user:User): Observable<any>{
    return this.http.put(`${url}/users/${user.id}`, user) as Observable<any>;
  }
  remove(user:User): Observable<any>{
    return this.http.delete(`${url}/users/${user.id}`) as Observable<any>;
  }
  login(username:string, password:string): Observable<User>{
    return this.http.get(`${url}/users/auth/{username}/{password}`) as Observable<User>;
  }

  constructor(private http: HttpClient) { }
}
