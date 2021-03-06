import { Component, OnInit } from '@angular/core';

import { RequestLine } from '../requestLine.class';
import{RequestLineService} from '../request-line.service';
import{RequestService} from '../../request/request.service';
import { Product } from '../../product/product.class';
import{ProductService} from '../../product/product.service';
import{Router, ActivatedRoute} from '@angular/router';
import {SystemService} from '../../system/system.service';
import { User } from '../../user/user.class';

@Component({
  selector: 'app-request-line-edit',
  templateUrl: './request-line-edit.component.html',
  styleUrls: ['./request-line-edit.component.css']
})
export class RequestLineEditComponent implements OnInit {
  
  requestline: RequestLine;
  request: Request;
  rid: string;
  products: Product[];
  logU: User;
  un:string;

  save(): void{
    this.relsscvr.change(this.requestline)
        .subscribe(
          respond => {
            console.log(respond);
            this.router.navigateByUrl(`/requestline/list/${this.requestline.requestId}`);
          },
          err => {
            console.error(err);
          }
        );
  }

  constructor(private relsscvr: RequestLineService,
    private proscvr: ProductService,
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
        this.rid = this.route.snapshot.params.rid;
        this.un = this.logU.username;

        this.proscvr.list()
        .subscribe(respond => {
          console.log(respond);
          this.products = respond;
          }
        );

        let id = this.route.snapshot.params.id;

        this.relsscvr.get(id)
          .subscribe(
            respond => {
            console.log(respond);
            this.requestline = respond;
            },
            err =>{
              console.error(err);
            }
          );
      }
  }

}
