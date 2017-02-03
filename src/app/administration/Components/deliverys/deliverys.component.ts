import {Component, OnInit, ViewChild} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

//despegar.com imports
import {Delivery} from "../../administration.module";
import {DeliveryServiceService} from "../../Services/delivery-service.service";

@Component({
  selector: 'app-deliverys',
  templateUrl: 'deliverys.component.html',
  styleUrls: ['deliverys.component.css'],
  providers: []
})
export class DeliverysComponent implements OnInit {
  public delivery: Delivery = new Delivery();
  public paramId: number;

  @ViewChild("deliveryForm") private deliveryForm: HTMLFormElement;
  @ViewChild("ccApellido") private ccApellido: HTMLInputElement;

  constructor(private deliveryService: DeliveryServiceService, private router: Router, route: ActivatedRoute) {
    let params: number;
    route.params.subscribe((params) => {
        this.paramId = <number>params['id'];
      }
    );

    if (this.paramId) {
      this.delivery = this.deliveryService.getDelivery(this.paramId);
    }
  }

  ngOnInit() {

  }

  onSubmit() {
    let del: Delivery = new Delivery(
      this.delivery.name,
      this.delivery.descripcion,
      this.delivery.especialidades,
      this.delivery.direccion,
      this.delivery.horarioDesde,
      this.delivery.horarioHasta,
      this.delivery.telefono,
      this.delivery.caNombre,
      this.delivery.caApellido,
      this.delivery.caTelefono,
      this.delivery.caEmail,
      this.delivery.ccNombre,
      this.delivery.ccApellido,
      this.delivery.ccTelefono,
      this.delivery.ccEmail,
      this.delivery.idemCa
    );

    this.deliveryService.deliverys.push(del);
    this.clear();
  }

  private clear() {
    if (!this.paramId) {
      this.deliveryForm.reset();
      this.delivery = new Delivery();
    }
  }

  protected clearCC(event: any) {
    if (this.delivery.idemCa) {
      this.delivery.ccApellido = null;
      this.delivery.ccNombre = null;
      this.delivery.ccEmail = null;
      this.delivery.ccTelefono = null;
      //this.ccApellido.remove();
    }
  }

  protected getDeliverys(): Delivery[] {
    return this.deliveryService.getDeliverys();
  }

  protected previews() {
    if (this.paramId) {
      this.paramId = parseInt(this.paramId.toString()) - 1;
      this.delivery = this.deliveryService.getDelivery(this.paramId);
      this.router.navigate(['delivery', this.paramId]);
    }
  }

  protected next() {
    if (this.paramId) {
      this.paramId = parseInt(this.paramId.toString()) + 1;
      this.delivery = this.deliveryService.getDelivery(this.paramId);
      this.router.navigate(['delivery', this.paramId]);
    }
  }
}
