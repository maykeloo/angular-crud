export type ProductId = string;
export type ProductPrice = number;


export type Product = {
  id: ProductId;
  name: string;
  price: ProductPrice;
}

export type CreateProduct = Omit<Product, 'id'>