import { Component, OnInit } from '@angular/core';
import {DeliveryServiceService} from "../../Services/delivery-service.service";

@Component({
  selector: 'app-delete-delivery',
  templateUrl: 'delete-delivery.component.html',
  styleUrls: ['delete-delivery.component.css'],
  providers: []
})
export class DeleteDeliveryComponent implements OnInit {

  constructor(private deliveryService: DeliveryServiceService) { }

  ngOnInit() {

  }

}
