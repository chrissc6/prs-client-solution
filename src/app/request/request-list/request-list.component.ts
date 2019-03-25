import { Component, OnInit } from '@angular/core';

import{Request} from '../request.class';
import{RequestService} from '../request.service';
import {SystemService} from '../../system/system.service';
import { User } from '../../user/user.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests: Request[];
  searchCriteria: string = "";
  sortCriteria: string = "username";
  sortOrder: string = "asc";
  logUid: number;
  logUa:boolean = false;
  logU:User;

  sortBy(column: string): void{
    if(this.sortCriteria === column)
    {
      this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc";
    }
    else
    {
      this.sortCriteria = column;
      this.sortOrder = "asc";
    }
  }

  constructor(private resrvc: RequestService,
    private syssvc: SystemService,
    private router: Router) { }

    ngOnInit() {
      if(this.syssvc.loggedInUser == null)
      {
        this.router.navigateByUrl('/login');
      }
      else
      {
        this.logU = this.syssvc.loggedInUser;
        if(this.logU.isAdmin == true)
        {
          this.logUa = true;
        }
        this.logUid = this.syssvc.loggedInUser.id;
        this.resrvc.list()
          .subscribe(respond => {
            console.log(respond);
            this.requests = respond;
          });
      }
  }

}
