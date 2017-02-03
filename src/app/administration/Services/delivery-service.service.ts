import {Injectable} from '@angular/core';
import {Delivery} from "../Classes/delivery";
import {Http} from "@angular/http";

@Injectable()
export class DeliveryServiceService {
  public deliverys: Delivery[] = [];

  constructor(private http: Http) {
    this.http.get("./app/administration/data.json")
      .subscribe((data)=> {
        setTimeout(()=> {
          this.deliverys = data.json();
        }, 300);
      });
  }

  getDeliverys(): Delivery[] {
    return this.deliverys;
  }

  /**
   * @method findDelivery -> return index of delivery
   */
  findDelivery(delivery: Delivery): number {
    return this.deliverys.findIndex((del: Delivery) => {
      return delivery === del;
    });
  }

  getDelivery(id: number): Delivery {
    return this.deliverys[id];
  }

  deleteDelivery(delivery: Delivery) {
    let index = this.findDelivery(delivery);
    if (index >= 0) {
      this.deliverys.splice(index, 1);
    }
  }
}
