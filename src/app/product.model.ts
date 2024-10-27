interface Rating {
  rate: number;
  count: number;
}
export interface Product {
  id: number;
  title: string;
  rating: Rating;
  image: string;
  category: string;
  price: number;
}
