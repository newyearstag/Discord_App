import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesLayoutComponent } from './accessories-layout.component';

describe('AccessoriesLayoutComponent', () => {
  let component: AccessoriesLayoutComponent;
  let fixture: ComponentFixture<AccessoriesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessoriesLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessoriesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
