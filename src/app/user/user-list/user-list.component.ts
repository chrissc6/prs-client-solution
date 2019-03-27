import { Component, OnInit } from '@angular/core';

import {UserService} from '../user.service';
import {User} from '../user.class';
import {SystemService} from '../../system/system.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  searchCriteria: string = "";
  sortCriteria: string = "username";
  sortOrder: string = "asc";
  logU:User;
  logUa:boolean = false;
  un:string;

  sortBy(column: string): void{
    if(this.sortCriteria === column)
    {
      this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc";
    }
    else
    {
      this.sortCriteria = column;
      this.sortOrder = "asc";
    }
  }

  constructor(private usersrvc: UserService,
    private syssvc: SystemService,
    private router: Router) { }

  ngOnInit() {
    if(this.syssvc.loggedInUser == null)
      {
        this.router.navigateByUrl('/login');
      }
      else
      {
        this.logU = this.syssvc.loggedInUser;
        this.logUa = this.logU.isAdmin;
        this.un = this.logU.username;
        this.usersrvc.list()
          .subscribe(respond => {
            console.log(respond);
            this.users = respond;
          });
      }
  }

}
