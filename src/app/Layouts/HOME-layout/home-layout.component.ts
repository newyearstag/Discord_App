import { Component } from '@angular/core';
import { ProductModel2 } from 'C:/Users/newye/Discord_App/src/app/body/shop-by-category/product.model2';
import { ProductsService } from 'src/app/body/shop-by-category/cat.service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent {
    title = 'Discord_App';
    products: ProductModel2 [] = [];
  
    constructor(private ps:ProductsService){
    }
  }