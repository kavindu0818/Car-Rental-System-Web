
export class CarModel {
    number:string;
    name:string;
    model:string;
    year:string;
    type:string;
    price:number;
    fuel:string;
    site :string;
    image:string;
    available :string;

    constructor(number:string, name:string, model:string, year:string, type:string, price:number, fuel:string, site:string, image:string, available:string) {
        this.number = number;
        this.name = name;
        this.model = model;
        this.year = year;
        this.type = type;
        this.price = price;
        this.fuel = fuel;
        this.site = site;
        this.image = image;
        this.available = available;
    }



}