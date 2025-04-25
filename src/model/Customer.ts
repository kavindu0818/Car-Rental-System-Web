export class Customer {
    phone: string;
    name: string;
    email: string;
    license: string;
    address: string;

   constructor(phone: string, name: string, email: string, license: string, address: string) {
       this.phone = phone;
       this.name = name;
       this.email = email;
       this.license = license;
       this.address = address;
   }
}