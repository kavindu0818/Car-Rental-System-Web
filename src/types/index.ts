export interface Car {
  id: string;
  name: string;
  make: string;
  model: string;
  year: number;
  fuel: 'Petrol' | 'Diesel' | 'Hybrid' | 'Electric';
  licensePlate: string;
  pricePerDay: number;
  available: boolean;
  seats: number;
  transmission: 'Automatic' | 'Manual';
  imageSrc: string;
  category: 'Economy' | 'Compact' | 'SUV' | 'Luxury' | 'Sports';
  description: string;
  features: string[];
}

export interface BookingDetails {
  carId: string;
  startDate: Date;
  endDate: Date;
  name:string;
  email: string;
  phone:string;
  totalPrice: number;
}

export interface CustomerDetails {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  totalPrice: number;
  customerAddress: string;
  LicenceNumber: string;
}

export type ThemeMode = 'light' | 'dark';