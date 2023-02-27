import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkReadyShoesLayoutComponent } from './work-ready-shoes-layout.component';

describe('WorkReadyShoesLayoutComponent', () => {
  let component: WorkReadyShoesLayoutComponent;
  let fixture: ComponentFixture<WorkReadyShoesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkReadyShoesLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkReadyShoesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
