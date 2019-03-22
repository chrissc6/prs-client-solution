import { Component, OnInit } from '@angular/core';

import{Router} from '@angular/router';
import {SystemService} from '../../system/system.service';
import{Request} from '../request.class';
import{RequestService} from '../request.service';
import{UserService} from '../../user/user.service';
import { User } from '../../user/user.class';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request = new Request();
  users: User[];

  constructor(private rescvr: RequestService,
    private uscvr: UserService,
    private router: Router,
    private syssvc: SystemService) { }

    save():void{
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
    this.uscvr.list()
    .subscribe(
      respond => {
        console.log(respond);
        this.users = respond;
      }
    )
  }

}
