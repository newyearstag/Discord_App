import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensPantsLayoutComponent } from './mens-pants-layout.component';

describe('ShoppingLayoutComponent', () => {
  let component: MensPantsLayoutComponent;
  let fixture: ComponentFixture<MensPantsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensPantsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensPantsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
