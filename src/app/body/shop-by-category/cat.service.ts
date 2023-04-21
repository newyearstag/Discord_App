import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductModel2 } from "./product.model2";
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Injectable(
    {providedIn: 'root'}
)
export class ProductsService {
    //private baseUrl:string = "https://tutorial-db3ee-default-rtdb.firebaseio.com/";
   // private productsEndPoint = "Products.json";

    constructor(private db: AngularFireDatabase) {
        //http:HttpClient){

    }

    getProducts(){
        return this.db.list<ProductModel2>("Products").valueChanges();
        //this.http.get<ProductModel []>(this.baseUrl + this.productsEndPoint);
    }

   // getProduct(index:number){
   //     return this.db.list<ProductModel2>(this.baseUrl + 'Products' + '/' + index + '.json');
   // }

    addProduct(Product: ProductModel2){
        this.db.list<ProductModel2>("Products").push(Product)
    }
}
