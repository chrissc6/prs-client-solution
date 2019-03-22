import { Component, OnInit } from '@angular/core';
import { RequestLine } from '../requestLine.class';
import { Product } from '../../product/product.class';

@Component({
  selector: 'app-request-line-create',
  templateUrl: './request-line-create.component.html',
  styleUrls: ['./request-line-create.component.css']
})
export class RequestLineCreateComponent implements OnInit {

  requestline: RequestLine = new RequestLine();
  rid: string;
  products: Product[];
  
  constructor() { }

  ngOnInit() {
  }

}
