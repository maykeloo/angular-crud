import { ProductRepository } from './ProductRepository';
import { fromPromise } from 'rxjs/internal/observable/innerFrom';

export class ProductService {
  constructor(private productController: ProductRepository) {}

  $getAllProducts() {
    return fromPromise(this.productController.getAllProducts());
  }
}