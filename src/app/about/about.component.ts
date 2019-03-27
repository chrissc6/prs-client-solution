import { Component, OnInit } from '@angular/core';

import {SystemService} from '../system/system.service';
import { User } from '../user/user.class';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  logU:User;
  un:string;

  constructor(private syssvc: SystemService) { }

  ngOnInit() {
    if(this.syssvc.loggedInUser != null)
    {
      this.logU=this.syssvc.loggedInUser;
      this.un=this.logU.username;
    }
  }

}
