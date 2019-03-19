import { Component, OnInit } from '@angular/core';

import {UserService} from '../user.service';
import {User} from '../user.class';
import {Router} from '@angular/router';
import {SystemService} from '../../system/system.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  username: string = "";
  password: string = "";
  message: string = "";

  login():void{
    this.usersrvc.login(this.username, this.password)
    .subscribe(
      respond => {
        console.log("Login Successful!", respond);
        let x = respond;
        this.syssvc.loggedInUser = x;
        this.router.navigateByUrl("/home");
      },
      err => {
        console.log("Login Failed - Username/Password combination not found", err);
        this.message = "Login Failed - Username or Password not found";
      }
    )
  }

  constructor(private usersrvc: UserService, private router: Router,
    private syssvc: SystemService) { }

  ngOnInit() {
    this.syssvc.loggedInUser = null // user not logged in
  }

}
