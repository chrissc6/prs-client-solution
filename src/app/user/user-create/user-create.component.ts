import { Component, OnInit } from '@angular/core';

import{Router} from '@angular/router';
import {UserService} from '../user.service';
import {User} from '../user.class';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = new User("", "", "", "", "", "");

  save():void{
    this.userscvr.create(this.user)
    .subscribe(
      respond => { //success
        console.log(respond);
        this.router.navigateByUrl('/user/list');
      },
      err =>{ //error
        console.error(err);
      }
    );
  }

  constructor(private userscvr: UserService,
    private router: Router) { }

  ngOnInit() {
  }

}
