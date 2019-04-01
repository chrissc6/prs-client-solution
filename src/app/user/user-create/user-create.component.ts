import { Component, OnInit } from '@angular/core';

import{Router} from '@angular/router';
import {UserService} from '../user.service';
import {User} from '../user.class';
import {SystemService} from '../../system/system.service';
// import { checkAndUpdateBinding } from '@angular/core/src/view/util';
// import { userInfo } from 'os';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = new User("", "", "", "", "", "");
  password2:string = "";
  logU: User;
  un:string;
  message: string = "";
  message2: string = "";
  

  save():void{
    if(this.password2 == this.user.password)
    {
      this.userscvr.create(this.user)
      .subscribe(
        respond => { //success
          console.log(respond);
          this.router.navigateByUrl('/user/list');
        },
        err =>{ //error
          console.error(err);
          
          this.message = "Error: Missing required fields";
          this.message2 = "<- Required";
        }
      );
    }
    else{
      console.log("Passwords did not match")
      this.password2 = "";
      this.user.password = "";
    }
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
    private router: Router,
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
      }
  }

}
