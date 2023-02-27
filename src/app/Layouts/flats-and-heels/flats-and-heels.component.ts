import { Component } from '@angular/core';
import { ProductModel } from 'C:/Users/newye/Discord_App/src/app/navigation/lab3-shopping-cards/product.model';
import { mock_list } from 'C:/Users/newye/Discord_App/src/app/navigation/lab3-shopping-cards/mock_list';

@Component({
  selector: 'app-flats-and-heels',
  templateUrl: './flats-and-heels.component.html',
  styleUrls: ['./flats-and-heels.component.css']
})
export class FlatsAndHeelsComponent {
  title = 'Discord_App';
  products: ProductModel [] = [];

  constructor(){
    for (var item of mock_list){
      console.log(item);
      this.products.push(item);
    }
  }
}