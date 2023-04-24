import { Component, OnInit } from '@angular/core';
import { ProductModel2 } from 'C:/Users/newye/Discord_App/src/app/body/shop-by-category/product.model2';
import { ProductsService } from 'src/app/body/shop-by-category/cat.service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {
    title = 'Discord_App';
    products: ProductModel2 [] = [];
  
    constructor(private ps:ProductsService){
    }
 

  ngOnInit(): void {
    this.ps.getProducts().subscribe((data: ProductModel2 []) =>{
    for (var x of data){
      console.log(x)
      this.products.push(x)
    }
  })
  }
}