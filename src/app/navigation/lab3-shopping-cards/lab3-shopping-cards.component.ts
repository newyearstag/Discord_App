import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab3-shopping-cards',
  templateUrl: './lab3-shopping-cards.component.html',
  styleUrls: ['./lab3-shopping-cards.component.css']
})
export class Lab3ShoppingCardsComponent implements OnInit {
@Input() img: string;
@Input() imgDescription: string;
@Input() brand: string;
@Input() description: string;
@Input() currprice: number;
@Input() oldprice: number;
@Input() discount: number;
//@Input() isVisible: boolean;

  private constructor() {
    //this.isVisible = false;
    this.img = "No image found";
    this.imgDescription = "No description found";
    this.brand = "No brand found";
    this.description = "No description found";
    this.currprice = 0;
    this.oldprice = 0;
    this.discount = 0;

  }

  ngOnInit(): void {
  }
}