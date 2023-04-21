import { Component } from '@angular/core';
import { ProductsService } from 'src/app/body/shop-by-category/cat.service';
import { ProductModel } from 'C:/Users/newye/Discord_App/src/app/navigation/lab3-shopping-cards/product.model';


@Component({
  selector: 'app-kurtas-layout',
  templateUrl: './kurtas-layout.component.html',
  styleUrls: ['./kurtas-layout.component.css']
})
export class KurtasLayoutComponent {
  title = 'Discord_App';
  products: ProductModel [] = [];

  constructor(private ps:ProductsService){
  }
}