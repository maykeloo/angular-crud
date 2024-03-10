export type ProductId = string;
export type ProductPrice = number;


export type Product = {
  uuid: ProductId;
  name: string;
  price: ProductPrice;
}