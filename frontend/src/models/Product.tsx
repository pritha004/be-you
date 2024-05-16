export interface Product {
  id: number;
  imgURL: string;
  name: string;
  desc: string;
  price: number;
  rating: number;
  reviewsNum: number;
  category: "MAKEUP" | "SKINCARE" | "HAIRCARE" | "BABYCARE";
  SubCategory: string;
}

export interface CartProduct extends Product{
  quantity:number;
}