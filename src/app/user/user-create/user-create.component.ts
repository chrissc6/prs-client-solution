import { Component, OnInit } from '@angular/core';

import{Router} from '@angular/router';
import {UserService} from '../user.service';
import {User} from '../user.class';
import { checkAndUpdateBinding } from '@angular/core/src/view/util';
import { userInfo } from 'os';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = new User("", "", "", "", "", "");
  password2:string = "";
  

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

  // checkP(user, password2):void{

  //   if(this.user.password == password2)
  //   {
  //     this.save();
  //   }
  //   else
  //   {
  //     err =>{ //error
  //       console.error(err);
  //     }
  //   }

  // }

  constructor(private userscvr: UserService,
    private router: Router) { }

  ngOnInit() {
  }

}
