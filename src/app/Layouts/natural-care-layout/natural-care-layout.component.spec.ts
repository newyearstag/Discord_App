import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalCareLayoutComponent } from './natural-care-layout.component';

describe('NaturalCareLayoutComponent', () => {
  let component: NaturalCareLayoutComponent;
  let fixture: ComponentFixture<NaturalCareLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaturalCareLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaturalCareLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
