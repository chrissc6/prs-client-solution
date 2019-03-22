import { Component, OnInit } from '@angular/core';

import { RequestLine } from '../requestLine.class';
import{RequestLineService} from '../request-line.service';
import{RequestService} from '../../request/request.service';
import { Product } from '../../product/product.class';
import{ProductService} from '../../product/product.service';
import{Router, ActivatedRoute} from '@angular/router';
import {SystemService} from '../../system/system.service';

@Component({
  selector: 'app-request-line-create',
  templateUrl: './request-line-create.component.html',
  styleUrls: ['./request-line-create.component.css']
})
export class RequestLineCreateComponent implements OnInit {

  requestline: RequestLine = new RequestLine();
  request: Request;
  rid: string;
  products: Product[];

  save(): void{
    this.requestline.requestId = Number(this.rid);
    this.relsscvr.create(this.requestline)
        .subscribe(
          respond => {
            console.log(respond);
            this.router.navigateByUrl(`/requestline/list/${this.rid}`);
          },
          err => {
            console.error(err);
          }
        );
  }
  
  constructor(private relsscvr: RequestLineService,
    private relscvr: RequestService,
    private proscvr: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private syssvc: SystemService) { }

  ngOnInit() {
    this.rid = this.route.snapshot.params.rid;

    this.proscvr.list()
    .subscribe(respond => {
      console.log(respond);
      this.products = respond;
      }
    );
  }

}
