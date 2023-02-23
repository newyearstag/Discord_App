export class ProductModel {
    img: string;
    imgDescription: string;
    brand: string;
    description: string;
    currprice: number;
    oldprice: number;
    discount: number;

    constructor(img: string, imgDescription: string, brand: string,currprice: number, oldprice: number, description: string, discount: number){
        this.img = img;
        this.imgDescription = imgDescription;
        this.brand = brand;
        this.description = description;
        this.currprice = currprice;
        this.oldprice = oldprice;
        this.discount = discount;
    }
}