import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/navigation/lab3-shopping-cards/cards.service';
import { ProductModel } from 'src/app/navigation/lab3-shopping-cards/product.model';

@Component({
  selector: 'fm-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor(private ps:ProductsService) { }

  ngOnInit(): void{
  }

  addProduct(Product: ProductModel){
    console.log("You clicked add product.");
    console.log(Product);
    this.ps.addProduct(Product);
  }
}