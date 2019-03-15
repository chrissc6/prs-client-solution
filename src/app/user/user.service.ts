import { Injectable } from '@angular/core';

import{HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';

const url = "http://localhost:52132/api/";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
}
