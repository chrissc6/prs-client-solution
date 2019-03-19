import { Component, OnInit } from '@angular/core';

import {UserService} from '../user.service';
import {User} from '../user.class';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  username: string = "";
  password: string = "";

  login():void{
    this.usersrvc.login(this.username, this.password)
    .subscribe(
      respond => {
        console.log("Login Successful!", respond);
        this.router.navigateByUrl("/home");
      },
      err => {
        console.log("Login Failed - Username/Password combination not found", err);
      }
    )
  }

  constructor(private usersrvc: UserService, private router: Router) { }

  ngOnInit() {
  }

}
