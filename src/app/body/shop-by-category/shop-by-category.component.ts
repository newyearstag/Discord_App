import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-by-category',
  templateUrl: './shop-by-category.component.html',
  styleUrls: ['./shop-by-category.component.css']
})
export class ShopByCategoryComponent implements OnInit {
@Input() img: string;
@Input() imgDescription: string;

//@Input() isVisible: boolean;

  private constructor() {
    //this.isVisible = false;
    this.img = "No image found";
    this.imgDescription = "No description found";


  }

  ngOnInit(): void {
  }
}