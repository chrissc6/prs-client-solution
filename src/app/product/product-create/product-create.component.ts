import { Component, OnInit } from '@angular/core';

import{Router} from '@angular/router';
import{Product} from '../product.class';
import{ProductService} from '../product.service';
import{Vendor} from '../../vendor/vendor.class';
import{VendorService} from '../../vendor/vendor.service';
import {SystemService} from '../../system/system.service';
import { User } from '../../user/user.class';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  vendors: Vendor[];
  product: Product = new Product(0,"","",0,"Each","")
  logU:User;
  un:string;

  constructor(private proscvr: ProductService,
    private venscvr: VendorService,
    private router: Router,
    private syssvc: SystemService) { }

    save():void{
      this.proscvr.create(this.product)
        .subscribe(
          respond => {
            console.log(respond);
            this.router.navigateByUrl('/product/list');
          },
          err => {
            console.error(err);
          }
        );
    }

  ngOnInit() {
    if(this.syssvc.loggedInUser == null)
      {
        this.router.navigateByUrl('/login');
      }
      else
      {
        this.logU = this.syssvc.loggedInUser;
        this.un = this.logU.username;
        this.venscvr.list()
        .subscribe(respond => {
          this.vendors = respond;
          console.log(respond);
          },
          err => {
            console.log(err);
          }
        )
      }
  };

}
