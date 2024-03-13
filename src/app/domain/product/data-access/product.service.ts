import { ProductRepository } from '../api/ProductRepository';
import { from } from 'rxjs';
import { Product } from '../model/Product';
import { RepositoryMethods } from '../../../application/types';

export class ProductService implements RepositoryMethods<ProductRepository> {
  constructor(private productController: ProductRepository) {}

  $getAllProducts() {
    return from(this.productController.getAllProducts());
  }

  $createProduct(product: Product) {
    return from(this.productController.createProduct(product));
  }

  $getProduct(productId: string) {
    return from(this.productController.getProduct(productId));
  }

  $updateProduct(product: Product) {
    return from(this.productController.updateProduct(product));
  }
}