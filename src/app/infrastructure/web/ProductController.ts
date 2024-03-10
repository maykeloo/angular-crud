import { Product } from '../../domain/product/model/Product';
import { inject } from '@angular/core';
import { RestClient } from '../httpClient';

export class ProductController {
  private RestClient = inject(RestClient);

  getAllProducts() {
    return this.RestClient.get<Product[]>('products')
  }
}