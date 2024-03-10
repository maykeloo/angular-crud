import { Product } from "../model/Product";

export type ProductRepository = {
  getAllProducts: () => Promise<Product[]>;
}