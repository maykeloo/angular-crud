import { Product } from '../model/Product';

export type ProductRepository = {
  getAllProducts: () => Promise<Product[]>;
  createProduct: (product: Product) => Promise<Product>;
  getProduct: (productId: string) => Promise<Product>;
  updateProduct: (product: Product) => Promise<Product>;
  deleteProduct: (productId: string) => Promise<void>;
}