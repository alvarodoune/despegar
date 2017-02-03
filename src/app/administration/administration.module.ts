import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {RouterLink, RouterModule} from "@angular/router";
import {Http} from "@angular/http";

//despegar.com imports
import { DeleteDeliveryComponent } from './Components/delete-delivery/delete-delivery.component';
import { DeliveryServiceService } from './Services/delivery-service.service';
import { DeliverysComponent } from './Components/deliverys/deliverys.component';
import { DeliveryDetailComponent } from './Components/delivery-detail/delivery-detail.component';
import {Delivery} from "./Classes/delivery";
import { ListDeliveryComponent } from './Components/list-delivery/list-delivery.component';
import { FilterDeliveryPipe } from './Components/filter-delivery.pipe';
import {DataTableModule} from "angular2-datatable";

export  {DeleteDeliveryComponent};
export { DeliverysComponent};
export {DeliveryDetailComponent};
export {Delivery};
export {DeliveryServiceService};
export {ListDeliveryComponent};
export {FilterDeliveryPipe};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    DataTableModule
  ],
  declarations: [
    DeleteDeliveryComponent,
    DeliveryDetailComponent,
    ListDeliveryComponent,
    FilterDeliveryPipe
  ],
  exports: [
  ],
  providers: [
  ],
  schemas: [
  ]
})
export class AdministrationModule {

}
