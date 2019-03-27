import { Component, OnInit } from '@angular/core';

import{Router} from '@angular/router';
import{VendorService} from '../vendor.service';
import{Vendor} from '../vendor.class';
import{SystemService} from '../../system/system.service';
import { User } from '../../user/user.class';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  vendor: Vendor = new Vendor('','','','','','','','')
  logU:User;
  un:string;

  save(): void{
    this.venscrv.create(this.vendor)
    .subscribe(
      respond => {
        console.log("Update Vendor Successful!: ", respond);
        this.router.navigateByUrl('/vendor/list');
      },
      err => {
        console.log("Vendor Update Error: ", err);
      }
    );
  }

  constructor(private venscrv: VendorService,
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
        this.un = this.logU.username;
      }
  }

}
