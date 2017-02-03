//Angular imports
import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {Router} from "@angular/router";
//Angular imports

//despegar.com imports
import {Delivery} from "../../administration.module";
import {DeliveryServiceService} from "../../Services/delivery-service.service";
//despegar.com imports

@Component({
  selector: 'app-list-delivery',
  templateUrl: './list-delivery.component.html',
  styleUrls: ['./list-delivery.component.css']
})
export class ListDeliveryComponent implements OnInit {
  @ViewChild("deleteModal") public modal: HTMLElement;
  @Input() public titleName: string = "";
  @Input() public titleAddress: string = "";
  @Input() public titlePhone: string = "";
  @Input() public showActions: boolean = true;
  @Input() public moreActions: boolean = false;

  public filter: any = {name: "", direccion: ""};
  private deliveryToDelete: Delivery;

  constructor(private deliveryService: DeliveryServiceService, private router: Router) {

  }

  ngOnInit() {
  }

  protected getDeliverys(): Delivery[] {
    return this.deliveryService.getDeliverys();
  }

  protected deleteDelivery(event: any, delivery: Delivery) {
    this.deliveryService.deleteDelivery(delivery);
  }

  protected showModal(event: any, delivery: Delivery) {
    this.deliveryToDelete = delivery;
  }

  protected viewDetail(del: Delivery) {
    let id = this.deliveryService.findDelivery(del);
    this.router.navigate(['delivery', id]);
  }
}
