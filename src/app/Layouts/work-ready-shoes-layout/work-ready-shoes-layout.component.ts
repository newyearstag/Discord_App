import { Component } from '@angular/core';
import { ProductModel } from 'C:/Users/newye/Discord_App/src/app/navigation/lab3-shopping-cards/product.model';
import { ProductsService } from 'src/app/body/shop-by-category/cat.service';

@Component({
  selector: 'app-work-ready-shoes-layout',
  templateUrl: './work-ready-shoes-layout.component.html',
  styleUrls: ['./work-ready-shoes-layout.component.css']
})
export class WorkReadyShoesLayoutComponent {
  title = 'Discord_App';
  products: ProductModel [] = [];

  constructor(private ps:ProductsService){
  }
}