import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinnerwareKitchenwareLayoutComponent } from './dinnerware-kitchenware-layout.component';

describe('DinnerwareKitchenwareLayoutComponent', () => {
  let component: DinnerwareKitchenwareLayoutComponent;
  let fixture: ComponentFixture<DinnerwareKitchenwareLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinnerwareKitchenwareLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DinnerwareKitchenwareLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
