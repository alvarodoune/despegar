import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterDelivery',
  pure: false
})
export class FilterDeliveryPipe implements PipeTransform {

  transform(items: any[], args?: any): any {
    return items.filter((item: any) => {
      return item.name.toUpperCase().includes(args.name.toUpperCase()) && item.direccion.toUpperCase().includes(args.direccion.toUpperCase())
    });
  }

}
