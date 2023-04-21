import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/body/shop-by-category/cat.service';
import { ProductModel2 } from 'src/app/body/shop-by-category/product.model2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private ps:ProductsService) { }

  ngOnInit(): void{ }

  addProduct(Product: ProductModel2){
    console.log("You clicked add product.");
    console.log(Product);
    this.ps.addProduct(Product);
  }
}