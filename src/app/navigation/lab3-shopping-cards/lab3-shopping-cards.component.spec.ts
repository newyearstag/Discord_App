import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddProductComponent } from 'src/app/Layouts/add-product/add-product.component';
//import { Lab3ShoppingCardsComponent } from './lab3-shopping-cards.component';

describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
