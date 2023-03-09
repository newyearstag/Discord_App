import { Component } from '@angular/core';
import { ProductModel2 } from 'C:/Users/newye/Discord_App/src/app/body/shop-by-category/product.model2';
import { mock_list2 } from 'C:/Users/newye/Discord_App/src/app/body/shop-by-category/mocklist2';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent {
    title = 'Discord_App';
    products: ProductModel2 [] = [];
  
    constructor(){
      for (var item of mock_list2){
        console.log(item);
        this.products.push(item);
      }
    }
  }