import { Component, OnInit } from '@angular/core';

import{Request} from '../request.class';
import{RequestService} from '../request.service';
import {SystemService} from '../../system/system.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests: Request[];
  searchCriteria: string = "";

  constructor(private resrvc: RequestService,
    private syssvc: SystemService) { }

  ngOnInit() {
    this.resrvc.list()
      .subscribe(respond => {
        console.log(respond);
        this.requests = respond;
      });
  }

}
