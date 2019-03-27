import { Component, OnInit } from '@angular/core';

import{Router} from '@angular/router';
import{ActivatedRoute} from '@angular/router';
import {SystemService} from '../../system/system.service';
import{Request} from '../request.class';
import{RequestService} from '../request.service';
import { User } from '../../user/user.class';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

  request: Request;
  logU: User;
  un:string;

  constructor(private rescvr: RequestService,
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
        this.un = this.logU.username;

        let id = this.route.snapshot.params.id;

        this.rescvr.get(id)
          .subscribe(
            respond => {
            console.log(respond);
            this.request = respond;
            },
            err =>{
              console.error(err);
            }
          );
      }
  }

  save():void{
    this.rescvr.change(this.request)
    .subscribe(
      respond => { //success
        console.log("Request Update Successful!: ", respond);
        this.router.navigateByUrl('/request/list');
      },
      err =>{ //error
        console.error("Request Update Error: ", err);
      }
    );
  }


}
