import { Component, OnInit } from '@angular/core';

import {Menu} from './menu.class';
import {SystemService} from '../system.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: Menu[] = [
    new Menu("PRS", "/home", "Purchase Request System"),
    new Menu("Users", "/user/list", "List of users"),
    new Menu("Vendors", "/vendor/list", "List of vendors"),
    new Menu("Products", "/product/list", "List of products"),
    new Menu("Requests", "/request/list", "List of requests"),
    new Menu("Review", "/request/review/list", "List of requests to be reviewed"),
    new Menu("About", "/about", "About the author"),
    new Menu("Login/out", "/login", "Login to PRS")
  ]
  menu2: Menu[] = [
    new Menu("PRS", "/home", "Purchase Request System"),
    new Menu("Users", "/user/list", "List of users"),
    new Menu("Vendors", "/vendor/list", "List of vendors"),
    new Menu("Products", "/product/list", "List of products"),
    new Menu("Requests", "/request/list", "List of requests"),
    new Menu("About", "/about", "About the author"),
    new Menu("Login/out", "/login", "Login to PRS")
  ]

  logUr:boolean = false;
  logUr2:boolean = true;

  constructor(private syssvc: SystemService) { }

  ngOnInit() {
    if(this.syssvc.loggedInUser == null)
      {
        this.logUr = false;
        this.logUr2 = true;
      }
      else
      {
        if(this.syssvc.loggedInUser.isReviewer == true)
        {
          this.logUr = true;
          this.logUr2 = false;
        }
      }
  }

}
