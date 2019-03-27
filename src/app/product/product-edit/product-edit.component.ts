import { Component, OnInit } from '@angular/core';

import{Router} from '@angular/router';
import{ActivatedRoute} from '@angular/router';
import{Product} from '../product.class';
import{ProductService} from '../product.service';
import{Vendor} from '../../vendor/vendor.class';
import{VendorService} from '../../vendor/vendor.service';
import {SystemService} from '../../system/system.service';
import { User } from '../../user/user.class';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product;
  vendors: Vendor[];
  logU: User;
  un:string;

  save():void{
    this.proscvr.change(this.product)
    .subscribe(
      respond => { //success
        console.log("Product Update Successful!: ", respond);
        this.router.navigateByUrl('/product/list');
      },
      err =>{ //error
        console.error("Product Update Error: ", err);
      }
    );
  }

  constructor(private proscvr: ProductService,
    private venscvr: VendorService,
    private router: Router,
    private route: ActivatedRoute,
    private syssvc: SystemService) { }

  ngOnInit() {
    if(this.syssvc.loggedInUser == null)
      {
        this.router.navigateByUrl('/login');
      }
      else
      {
        this.logU = this.syssvc.loggedInUser;
        let id = this.route.snapshot.params.id;
        this.un = this.logU.username;

        this.proscvr.get(id)
          .subscribe(
            respond => {
            console.log(respond);
            this.product = respond;
            },
            err =>{
              console.error(err);
            }
          );
      }
    
    this.venscvr.list()
      .subscribe(respond => {
        console.log(respond);
        this.vendors = respond;
        },
        err => {
          console.log(err);
        }
      );
  }

}
