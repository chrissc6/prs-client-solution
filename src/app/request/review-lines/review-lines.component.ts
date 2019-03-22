import { Component, OnInit } from '@angular/core';

import{RequestService} from '../../request/request.service';
import{RequestLineService} from '../../requestLine/request-line.service';
import {SystemService} from '../../system/system.service';
import{Router} from '@angular/router';
import{ActivatedRoute} from '@angular/router';
import { Request } from '../../request/request.class';
import { RequestLine } from '../../requestLine/requestLine.class';

@Component({
  selector: 'app-review-lines',
  templateUrl: './review-lines.component.html',
  styleUrls: ['./review-lines.component.css']
})
export class ReviewLinesComponent implements OnInit {

  request: Request;
  reline: RequestLine;

  constructor(private relsrvc: RequestService,
    private relssrvc: RequestLineService,
    private syssvc: SystemService,
    private router: Router,
    private route: ActivatedRoute) { }

    //APPROVED, REJECTED
    reA(){
      this.relsrvc.reviewApproved(this.request)
      .subscribe(respond => {
        console.log(respond)
        this.router.navigateByUrl('/request/list');
      })
    }
    reR(){
      this.relsrvc.reviewRejected(this.request)
      .subscribe(respond => {
        console.log(respond)
        this.router.navigateByUrl('/request/list');
      })
    }

  ngOnInit() {
    let id = this.route.snapshot.params.id;

    this.relsrvc.get(id)
      .subscribe(respond => {
        console.log(respond);
        this.request = respond;
        });
  }

}
