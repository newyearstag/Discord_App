import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurtasLayoutComponent } from './kurtas-layout.component';

describe('KurtasLayoutComponent', () => {
  let component: KurtasLayoutComponent;
  let fixture: ComponentFixture<KurtasLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KurtasLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KurtasLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
