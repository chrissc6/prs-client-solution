import { Component, OnInit } from '@angular/core';

import{Router} from '@angular/router';
import{ActivatedRoute} from '@angular/router';
import{Product} from '../product.class';
import{ProductService} from '../product.service';
import {SystemService} from '../../system/system.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product;

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
    private router: Router,
    private route: ActivatedRoute,
    private syssvc: SystemService) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;

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

}
