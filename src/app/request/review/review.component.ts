import { Component, OnInit } from '@angular/core';

import{RequestService} from '../request.service';
import{Request} from '../request.class';
import { SystemService } from '../../system/system.service';
import { User } from '../../user/user.class';
import {Router} from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  requests: Request[];
  searchCriteria: string = "";
  sortCriteria: string = "username";
  sortOrder: string = "asc";
  logU: User;
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

  constructor(private resrvc: RequestService,
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
        this.un = this.logU.username;
        this.resrvc.listReview()
          .subscribe(respond => {
            console.log(respond);
            this.requests = respond;
          });
      }
  }

}
