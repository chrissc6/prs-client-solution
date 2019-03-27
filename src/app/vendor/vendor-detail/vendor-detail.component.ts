import { Component, OnInit } from '@angular/core';

import{ActivatedRoute} from '@angular/router';
import {VendorService} from '../vendor.service';
import {Vendor} from '../vendor.class';
import{Router} from '@angular/router';
import {SystemService} from '../../system/system.service';
import { User } from '../../user/user.class';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  vendor: Vendor;

  verify: boolean = false;
  verifyN: boolean = true;
  logU:User;
  logUa:boolean;
  un:string;

  constructor(private venscvr: VendorService,
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
        this.un = this.logU.username;
        let id = this.route.snapshot.params.id;

        this.venscvr.get(id)
        .subscribe(respond => {
          console.log(respond);
          this.vendor = respond;
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
    this.venscvr.remove(this.vendor)
    .subscribe(respond => {
      console.log("Vendor Delete Successful!", respond)
      this.router.navigateByUrl('/vendor/list');
    },
    err => {
      console.log("Vendor Delete Failed", err)
    });
  }

  editB():void{
    this.venscvr.change(this.vendor)
    .subscribe(
      respond => {
        console.log(respond);
        this.router.navigateByUrl(`/vendor/edit/${this.vendor.id}`);
      },
      err =>{
        console.error(err);
      }
    );
  }

}
