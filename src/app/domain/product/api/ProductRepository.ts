import { Product } from "../model/Product";

export type ProductRepository = {
  getAllProducts: () => Promise<Product[]>;
   createProduct: (product: Product) => Promise<Product>;
}