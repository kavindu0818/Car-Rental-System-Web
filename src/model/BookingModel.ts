export class BookingModel {

     carDetails:string;
     customerId:string;
     startDate:string;
     endDate:string;
     status:string;
     totalAmount:number;
     pricePerDay:number;

     constructor(carDetails:string, customerId:string,startDate:string, endDate:string, status:string, totalAmount:number, pricePerDay:number ) {
        this.carDetails = carDetails;
        this.customerId = customerId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = status;
        this.totalAmount = totalAmount;
        this.pricePerDay = pricePerDay;

     }

}
