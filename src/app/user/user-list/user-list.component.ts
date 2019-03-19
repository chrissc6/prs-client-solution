import { Component, OnInit } from '@angular/core';

import {UserService} from '../user.service';
import {User} from '../user.class';
import {SystemService} from '../../system/system.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private usersrvc: UserService,
    private syssvc: SystemService) { }

  ngOnInit() {
    this.usersrvc.list()
      .subscribe(respond => {
        console.log(respond);
        this.users = respond;
      });
  }

}
