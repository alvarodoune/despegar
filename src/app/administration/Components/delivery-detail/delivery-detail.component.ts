import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

//despegar imports
import {Delivery} from "../../administration.module";

@Component({
  selector: 'app-delivery-detail',
  templateUrl: './delivery-detail.component.html',
  styleUrls: ['./delivery-detail.component.css']
})
export class DeliveryDetailComponent implements OnInit {

  protected delivery: Delivery;

  constructor(router: Router, route: ActivatedRoute) {
    route.params.subscribe(
      params => this.delivery = <Delivery>params['id']
    );
  }

  ngOnInit() {
  }

}
