import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatsAndHeelsComponent } from './flats-and-heels.component';

describe('FlatsAndHeelsComponent', () => {
  let component: FlatsAndHeelsComponent;
  let fixture: ComponentFixture<FlatsAndHeelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlatsAndHeelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlatsAndHeelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
