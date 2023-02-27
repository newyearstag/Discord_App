import { Component } from '@angular/core';
import { ProductModel } from 'C:/Users/newye/Discord_App/src/app/navigation/lab3-shopping-cards/product.model';
import { mock_list } from 'C:/Users/newye/Discord_App/src/app/navigation/lab3-shopping-cards/mock_list';

@Component({
  selector: 'app-dinnerware-kitchenware-layout',
  templateUrl: './dinnerware-kitchenware-layout.component.html',
  styleUrls: ['./dinnerware-kitchenware-layout.component.css']
})
export class DinnerwareKitchenwareLayoutComponent {
  title = 'Discord_App';
  products: ProductModel [] = [];

  constructor(){
    for (var item of mock_list){
      console.log(item);
      this.products.push(item);
    }
  }
}