export interface Car {
  id: string;
  name: string;
  brand: string;
  year: number;
  seats: number;
  transmission: 'Manual' | 'Automatic';
  cc: number;
  color: string;
  fuel: 'Bensin' | 'Diesel';
  description: string;
  image: string;
  price: number; // Price per day in IDR
}

export interface NavItem {
  label: string;
  path: string;
}