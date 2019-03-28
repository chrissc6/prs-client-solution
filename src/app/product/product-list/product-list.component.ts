import { Component, OnInit } from '@angular/core';

import{Product} from '../product.class';
import{ProductService} from '../product.service';
import {SystemService} from '../../system/system.service';
import { User } from '../../user/user.class';
import{Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  searchCriteria: string = "";
  sortCriteria: string = "partNumber";
  sortOrder: string = "asc";
  logU: User;
  logUa:boolean;
  un:string;

  sortBy(column: string): void{
    if(this.sortCriteria === column)
    {
      this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc";
    }
    else
    {
      this.sortCriteria = column;
      this.sortOrder = "asc";
    }
  }

  constructor(private prosrvc: ProductService,
    private syssvc: SystemService,
    private router: Router) { }

  ngOnInit() {
    if(this.syssvc.loggedInUser == null)
      {
        this.router.navigateByUrl('/login');
      }
      else
      {
        this.logU = this.syssvc.loggedInUser;
        this.logUa = this.logU.isAdmin;
        this.un = this.logU.username;
        this.prosrvc.list()
          .subscribe(respond => {
            console.log(respond);
            this.products = respond;
          });
      }
  }

}
