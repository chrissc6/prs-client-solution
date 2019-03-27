import { Component, OnInit } from '@angular/core';

import{Router} from '@angular/router';
import {SystemService} from '../../system/system.service';
import{Request} from '../request.class';
import{RequestService} from '../request.service';
import{UserService} from '../../user/user.service';
import { User } from '../../user/user.class';
import { toDate } from '@angular/common/src/i18n/format_date';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request = new Request();
  // users: User[];
  logU:User;
  toD: Date = new Date();
  toDs = this.toD.toISOString();
  un:string;

  constructor(private rescvr: RequestService,
    private uscvr: UserService,
    private router: Router,
    private syssvc: SystemService) { }

    save():void{
      if(this.request.submittedDate == "")
      {
        this.request.submittedDate = this.toDs;
      }
        this.rescvr.create(this.request)
        .subscribe(
          respond => {
            console.log(respond);
            this.router.navigateByUrl('/request/list');
          },
          err => {
            console.error(err);
          }
        );
    }

  ngOnInit() {
    if(this.syssvc.loggedInUser == null)
    {
      this.router.navigateByUrl('/login');
    }
    else
    {
      this.logU = this.syssvc.loggedInUser;
      this.request.userId = this.logU.id;
      this.un = this.logU.username;
      console.log(this.request);
    }
    // this.uscvr.list()
    // .subscribe(
    //   respond => {
    //     console.log(respond);
    //     this.users = respond;
    //   }
    // )
  }

}
