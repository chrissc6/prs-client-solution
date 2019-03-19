import { Injectable } from '@angular/core';

import{HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';
import{Vendor} from './vendor.class';

const url = "http://localhost:52132/api";

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  list(): Observable<Vendor[]>{
    return this.http.get(`${url}/vendors`) as Observable<Vendor[]>;
  }
  get(id:string): Observable<Vendor>{
    return this.http.get(`${url}/vendors/${id}`) as Observable<Vendor>;
  }
  create(user:Vendor): Observable<any>{
    return this.http.post(`${url}/vendors/`, user) as Observable<any>;
  }
  change(user:Vendor): Observable<any>{
    return this.http.put(`${url}/vendors/${user.id}`, user) as Observable<any>;
  }
  remove(user:Vendor): Observable<any>{
    return this.http.delete(`${url}/vendors/${user.id}`) as Observable<any>;
  }

  constructor(private http: HttpClient) { }
}
