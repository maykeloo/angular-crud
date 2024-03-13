import { Product } from '../../domain/product/model/Product';
import { RestClient } from '../httpClient';
import { ProductRepository } from '../../domain/product/api/ProductRepository';

export class ProductController implements ProductRepository {
  private RestClient = new RestClient();

  getAllProducts() {
    return this.RestClient.get<Product[]>('products')
  }

  createProduct(product: Product) {
    return this.RestClient.post<Product>('products', product)
  }

  getProduct(productId: string) {
    return this.RestClient.get<Product>(`products/${productId}`)
  }

  updateProduct(product: Product) {
    return this.RestClient.patch<Product>(`products/${product.id}`, product)
  }

  deleteProduct(productId: string) {
    return this.RestClient.delete(`products/${productId}`)
  }
}