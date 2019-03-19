import { Component, OnInit } from '@angular/core';

import{Router} from '@angular/router';
import{ActivatedRoute} from '@angular/router';
import {UserService} from '../user.service';
import {User} from '../user.class';
import {SystemService} from '../../system/system.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  //no need to initialize because were going to load it with data
  //had to add *ngIf in the html
  user: User;

  save():void{
    this.userscvr.change(this.user)
    .subscribe(
      respond => { //success
        console.log("User Update Successful!: ", respond);
        this.router.navigateByUrl('/user/list');
      },
      err =>{ //error
        console.error("User Update Error: ", err);
      }
    );
  }

  constructor(private userscvr: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private syssvc: SystemService) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;

    this.userscvr.get(id)
      .subscribe(respond => {
        console.log(respond);
        this.user = respond;
        },
        err =>{ //error
          console.error(err);
        }
      );
  }

}
