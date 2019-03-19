import { Component, OnInit } from '@angular/core';

import{ActivatedRoute} from '@angular/router';
import {UserService} from '../user.service';
import {User} from '../user.class';
import{Router} from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;

  constructor(private userscvr: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;

    this.userscvr.get(id)
      .subscribe(respond => {
        console.log(respond);
        this.user = respond;
        });
  }

  delete(): void{
    this.userscvr.remove(this.user)
    .subscribe(
      respond => {
        console.log("User Delete Successful!", respond)
        this.router.navigateByUrl(`/user/list`);
      },
      err => {
        console.log("User Delete Successful!", err)
      }
    );
  }

  editB():void{
    this.userscvr.change(this.user)
    .subscribe(
      respond => { //success
        console.log(respond);
        this.router.navigateByUrl(`/user/edit/${this.user.id}`);
      },
      err =>{ //error
        console.error(err);
      }
    );
  }
}
