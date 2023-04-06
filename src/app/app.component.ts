import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/navigation/lab3-shopping-cards/product.model';
// import { mock_list } from './card/mock_list';
import { ProductsService } from 'src/app/navigation/lab3-shopping-cards/cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TutorialApp';
  products: ProductModel [] = [];

  constructor(private productservice:ProductsService){
    // for (var item of mock_list){
    //   //console.log(item);
    //   this.products.push(item);
    // }
  }
  ngOnInit(): void {
    this.productservice.getProducts().subscribe((data: ProductModel []) =>{
    for (var x of data){
      console.log(x)
      this.products.push(x)
    }
  })
  }
}