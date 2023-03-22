import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankManagerLoginComponent } from './bank-manager-login.component';

describe('BankManagerLoginComponent', () => {
  let component: BankManagerLoginComponent;
  let fixture: ComponentFixture<BankManagerLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankManagerLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankManagerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
