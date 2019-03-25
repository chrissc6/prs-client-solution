import { Component, OnInit } from '@angular/core';

import{ActivatedRoute} from '@angular/router';
import{Router} from '@angular/router';
import{Product} from '../product.class';
import{ProductService} from '../product.service';
import {SystemService} from '../../system/system.service';
import { User } from '../../user/user.class';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  verify: boolean = false;
  verifyN: boolean = true;
  logU:User;
  logUa:boolean;

  constructor(private proscvr: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private syssvc: SystemService) { }

  ngOnInit() {
    if(this.syssvc.loggedInUser == null)
      {
        this.router.navigateByUrl('/login');
      }
      else
      {
        this.logU = this.syssvc.loggedInUser;
        this.logUa = this.logU.isAdmin;
        let id = this.route.snapshot.params.id;

        this.proscvr.get(id)
          .subscribe(respond => {
            console.log(respond);
            this.product = respond;
            });
      }
  }

  setVerify(): void{
    this.verify = true;
    this.verifyN = false;
  }

  setVerifyN(): void{
    this.verify = false;
    this.verifyN = true;
  }

  delete(): void{
    this.proscvr.remove(this.product)
    .subscribe(
      respond => {
        console.log("Product Delete Successful!", respond)
        this.router.navigateByUrl(`/product/list`);
      },
      err => {
        console.log("Product Delete Failed!", err)
      }
    );
  }

  editB():void{
    this.proscvr.change(this.product)
    .subscribe(
      respond => {
        console.log(respond);
        this.router.navigateByUrl(`/product/edit/${this.product.id}`);
      },
      err =>{
        console.error(err);
      }
    );
  }

}
