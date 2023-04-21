import { Component } from '@angular/core';
import { ProductModel } from 'C:/Users/newye/Discord_App/src/app/navigation/lab3-shopping-cards/product.model';
import { ProductsService } from 'src/app/body/shop-by-category/cat.service';

@Component({
  selector: 'app-flats-and-heels',
  templateUrl: './flats-and-heels.component.html',
  styleUrls: ['./flats-and-heels.component.css']
})
export class FlatsAndHeelsComponent {
  title = 'Discord_App';
  products: ProductModel [] = [];

  constructor(private ps:ProductsService){
  }
}