import { Component, OnInit } from '@angular/core';
import { ProductModel2 } from 'src/app/body/shop-by-category/product.model2';
// import { mock_list } from './card/mock_list';
import { ProductsService } from 'src/app/body/shop-by-category/cat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TutorialApp';
  products: ProductModel2 [] = [];

  constructor(private productservice:ProductsService){
    // for (var item of mock_list){
    //   //console.log(item);
    //   this.products.push(item);
    // }
  }
  ngOnInit(): void {
    this.productservice.getProducts().subscribe((data: ProductModel2 []) =>{
    for (var x of data){
      console.log(x)
      this.products.push(x)
    }
  })
  }
}