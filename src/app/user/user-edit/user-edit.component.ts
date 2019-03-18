import { Component, OnInit } from '@angular/core';

import{Router} from '@angular/router';
import{ActivatedRoute} from '@angular/router';
import {UserService} from '../user.service';
import {User} from '../user.class';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User = new User("", "", "", "", "", "");

  save():void{
    this.userscvr.change(this.user)
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
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;

    this.userscvr.get(id)
      .subscribe(respond => {
        console.log(respond);
        this.user = respond;
        });
  }

}
