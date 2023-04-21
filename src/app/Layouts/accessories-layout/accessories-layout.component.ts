import { Component } from '@angular/core';
import { ProductModel } from 'C:/Users/newye/Discord_App/src/app/navigation/lab3-shopping-cards/product.model';
import { ProductsService } from 'src/app/body/shop-by-category/cat.service';


@Component({
  selector: 'app-accessories-layout',
  templateUrl: './accessories-layout.component.html',
  styleUrls: ['./accessories-layout.component.css']
})
export class AccessoriesLayoutComponent {
  title = 'Discord_App';
  products: ProductModel [] = [];

  constructor(private ps:ProductsService){
  }
}
