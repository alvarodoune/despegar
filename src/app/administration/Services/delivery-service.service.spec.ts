/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DeliveryServiceService } from './delivery-service.service';

describe('DeliveryServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeliveryServiceService]
    });
  });

  it('should ...', inject([DeliveryServiceService], (service: DeliveryServiceService) => {
    expect(service).toBeTruthy();
  }));
});
