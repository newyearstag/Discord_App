import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasualShoesFlipflopsLayoutComponent } from './casual-shoes-flipflops-layout.component';

describe('CasualShoesFlipflopsLayoutComponent', () => {
  let component: CasualShoesFlipflopsLayoutComponent;
  let fixture: ComponentFixture<CasualShoesFlipflopsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasualShoesFlipflopsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasualShoesFlipflopsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
