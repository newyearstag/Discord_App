import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab3ShoppingCardsComponent } from './lab3-shopping-cards.component';

describe('Lab3ShoppingCardsComponent', () => {
  let component: Lab3ShoppingCardsComponent;
  let fixture: ComponentFixture<Lab3ShoppingCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab3ShoppingCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lab3ShoppingCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
