import { Component } from '@angular/core';
import { ProductModel } from 'C:/Users/newye/Discord_App/src/app/navigation/lab3-shopping-cards/product.model';
import { mock_list } from 'C:/Users/newye/Discord_App/src/app/navigation/lab3-shopping-cards/mock_list';

@Component({
  selector: 'app-casual-shoes-flipflops-layout',
  templateUrl: './casual-shoes-flipflops-layout.component.html',
  styleUrls: ['./casual-shoes-flipflops-layout.component.css']
})
export class CasualShoesFlipflopsLayoutComponent {
  title = 'Discord_App';
  products: ProductModel [] = [];

  constructor(){
    for (var item of mock_list){
      console.log(item);
      this.products.push(item);
    }
  }
}