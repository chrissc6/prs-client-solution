import { Component, OnInit } from '@angular/core';

import{VendorService} from '../vendor.service';
import{Vendor} from '../vendor.class';
import {SystemService} from '../../system/system.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  vendors: Vendor[];
  searchCriteria: string = "";

  constructor(private vensrvc: VendorService,
    private syssvc: SystemService) { }

  ngOnInit() {
    this.vensrvc.list()
    .subscribe(respond => {
      console.log(respond);
      this.vendors = respond;
    });
  }

}
