import { Component, OnInit } from '@angular/core';

import{ActivatedRoute} from '@angular/router';
import{Router} from '@angular/router';
import {SystemService} from '../../system/system.service';
import{Request} from '../request.class';
import{RequestService} from '../request.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  request: Request;

  verify: boolean = false;
  verifyN: boolean = true;

  constructor(private rescvr: RequestService,
    private route: ActivatedRoute,
    private router: Router,
    private syssvc: SystemService) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;

    this.rescvr.get(id)
      .subscribe(respond => {
        console.log(respond);
        this.request = respond;
        });
  }

  reviewB(){
    this.rescvr.review(this.request)
    .subscribe(respond => {
      console.log(respond);
      this.router.navigateByUrl(`/request/list`);
    })
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
    this.rescvr.remove(this.request)
    .subscribe(
      respond => {
        console.log("Request Delete Successful!", respond)
        this.router.navigateByUrl(`/request/list`);
      },
      err => {
        console.log("Request Delete Failed!", err)
      }
    );
  }

  editB():void{
    this.rescvr.change(this.request)
    .subscribe(
      respond => {
        console.log(respond);
        this.router.navigateByUrl(`/request/edit/${this.request.id}`);
      },
      err =>{
        console.error(err);
      }
    );
  }

}
