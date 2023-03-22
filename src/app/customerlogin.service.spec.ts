import { TestBed } from '@angular/core/testing';

import { CustomerloginService } from './customerlogin.service';

describe('CustomerloginService', () => {
  let service: CustomerloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
