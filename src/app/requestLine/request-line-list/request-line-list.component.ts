import { Component, OnInit } from '@angular/core';

import{RequestService} from '../../request/request.service';
import{RequestLineService} from '../request-line.service';
import {SystemService} from '../../system/system.service';
import{Router} from '@angular/router';
import{ActivatedRoute} from '@angular/router';
import { Request } from '../../request/request.class';
import { RequestLine } from '../requestLine.class';
import { refreshDescendantViews } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-request-line-list',
  templateUrl: './request-line-list.component.html',
  styleUrls: ['./request-line-list.component.css']
})
export class RequestLineListComponent implements OnInit {

  request: Request;
  line: RequestLine;
  
  delete(line: RequestLine): void{
    this.relssrvc.remove(line)
    .subscribe(
      respond => {
        console.log("RequestLine Delete Successful!", respond);
        this.refresh();
      },
      err => {
        console.log("RequestLine Delete Failed!", err)
      }
    );
  }

  refresh():void{
    this.relsrvc.get(`${this.request.id}`)
    .subscribe( respond => {
      this.request=respond;
    });
  }

  constructor(private relsrvc: RequestService,
    private relssrvc: RequestLineService,
    private syssvc: SystemService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let rid = this.route.snapshot.params.rid;

    this.relsrvc.get(rid)
      .subscribe(respond => {
        console.log(respond);
        this.request = respond;
        });
  }


}
