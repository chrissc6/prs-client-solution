import { Component, OnInit } from '@angular/core';

import{RequestService} from '../request.service';
import{Request} from '../request.class';
import { SystemService } from '../../system/system.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  requests: Request[];

  constructor(private resrvc: RequestService,
    private syssvc: SystemService) { }

    ngOnInit() {
    this.resrvc.listReview()
      .subscribe(respond => {
        console.log(respond);
        this.requests = respond;
      });
  }

}
