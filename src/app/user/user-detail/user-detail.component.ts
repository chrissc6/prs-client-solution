import { Component, OnInit } from '@angular/core';

import{ActivatedRoute} from '@angular/router';
import {UserService} from '../user.service';
import {User} from '../user.class';
import{Router} from '@angular/router';
import {SystemService} from '../../system/system.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;

  verify: boolean = false;
  verifyN: boolean = true;
  logU:User;
  logUa:boolean;
  un:string;

  constructor(private userscvr: UserService,
    private route: ActivatedRoute,
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
        this.logUa = this.logU.isAdmin;
        let id = this.route.snapshot.params.id;
        this.un = this.logU.username;

        this.userscvr.get(id)
          .subscribe(respond => {
            console.log(respond);
            this.user = respond;
            });
      }
  }

  setVerify(): void{
    this.verify = true;
    this.verifyN = false;
  }

  setVerifyN(): void{
    this.verify = false;
    this.verifyN = true;
  }

  delete(): void{
    this.userscvr.remove(this.user)
    .subscribe(
      respond => {
        console.log("User Delete Successful!", respond)
        this.router.navigateByUrl(`/user/list`);
      },
      err => {
        console.log("User Delete Failed!", err)
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
