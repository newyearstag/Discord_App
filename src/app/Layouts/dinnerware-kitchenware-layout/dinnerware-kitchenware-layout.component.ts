import { Component } from '@angular/core';
import { ProductModel } from 'C:/Users/newye/Discord_App/src/app/navigation/lab3-shopping-cards/product.model';
import { ProductsService } from 'src/app/body/shop-by-category/cat.service';

@Component({
  selector: 'app-dinnerware-kitchenware-layout',
  templateUrl: './dinnerware-kitchenware-layout.component.html',
  styleUrls: ['./dinnerware-kitchenware-layout.component.css']
})
export class DinnerwareKitchenwareLayoutComponent {
  title = 'Discord_App';
  products: ProductModel [] = [];

  constructor(private ps:ProductsService){
  }
}