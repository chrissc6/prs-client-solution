import { Component, OnInit } from '@angular/core';

import{VendorService} from '../vendor.service';
import{Vendor} from '../vendor.class';
import {SystemService} from '../../system/system.service';
import { Router } from '@angular/router';
import { User } from '../../user/user.class';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  vendors: Vendor[];
  searchCriteria: string = "";
  sortCriteria: string = "vendor";
  sortOrder: string = "asc";
  logU:User;
  logUa:boolean;

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

  constructor(private vensrvc: VendorService,
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
        this.vensrvc.list()
        .subscribe(respond => {
          console.log(respond);
          this.vendors = respond;
        });
      }
  }

}
