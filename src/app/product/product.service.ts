import { Injectable } from '@angular/core';

import{HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';
import{Product} from './product.class';

const url = "http://localhost:52132/api";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  list(): Observable<Product[]>{
    return this.http.get(`${url}/products`) as Observable<Product[]>;
  }
  get(id:string): Observable<Product>{
    return this.http.get(`${url}/products/${id}`) as Observable<Product>;
  }
  create(product:Product): Observable<any>{
    return this.http.post(`${url}/products/`, product) as Observable<any>;
  }
  change(product:Product): Observable<any>{
    return this.http.put(`${url}/products/${product.id}`, product) as Observable<any>;
  }
  remove(product:Product): Observable<any>{
    return this.http.delete(`${url}/products/${product.id}`) as Observable<any>;
  }

  constructor(private http: HttpClient) { }
}
