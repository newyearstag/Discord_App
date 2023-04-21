import { Component } from '@angular/core';
import { ProductModel } from 'C:/Users/newye/Discord_App/src/app/navigation/lab3-shopping-cards/product.model';
import { ProductsService } from 'src/app/body/shop-by-category/cat.service';

@Component({
  selector: 'app-mens-pants-layout',
  templateUrl: './mens-pants-layout.component.html',
  styleUrls: ['./mens-pants-layout.component.css']
})
export class MensPantsLayoutComponent {
  title = 'Discord_App';
  products: ProductModel [] = [];

  constructor(private ps:ProductsService){
  }
}
