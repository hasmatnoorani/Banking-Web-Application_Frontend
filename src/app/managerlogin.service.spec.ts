import { TestBed } from '@angular/core/testing';

import { ManagerloginService } from './managerlogin.service';

describe('ManagerloginService', () => {
  let service: ManagerloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
