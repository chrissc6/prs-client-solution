import { Component, OnInit } from '@angular/core';

import{Product} from '../product.class';
import{ProductService} from '../product.service';
import {SystemService} from '../../system/system.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  searchCriteria: string = "";

  constructor(private prosrvc: ProductService,
    private syssvc: SystemService) { }

  ngOnInit() {
    this.prosrvc.list()
      .subscribe(respond => {
        console.log(respond);
        this.products = respond;
      });
  }

}
