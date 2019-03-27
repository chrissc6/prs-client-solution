import { Component, OnInit } from '@angular/core';

import{Router} from '@angular/router';
import{ActivatedRoute} from '@angular/router';
import{VendorService} from '../vendor.service';
import{Vendor} from '../vendor.class';
import{SystemService} from '../../system/system.service';
import { User } from '../../user/user.class';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  vendor: Vendor;
  logU:User;
  un:string;

  save(): void{
    this.venscrv.change(this.vendor)
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
    private route: ActivatedRoute,
    private syssvc: SystemService) { }

  ngOnInit() {
    if(this.syssvc.loggedInUser == null)
      {
        this.router.navigateByUrl('/login');
      }
      else
      {
        this.logU = this.syssvc.loggedInUser;
        let id = this.route.snapshot.params.id;
        this.un = this.logU.username;

        this.venscrv.get(id)
        .subscribe(
          respond => {
            console.log(respond);
            this.vendor = respond;
          },
          err => {
            console.error(err);
          }
        );
      }
  }

}
