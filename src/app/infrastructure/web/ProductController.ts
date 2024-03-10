import { Product } from '../../domain/product/model/Product';
import { inject } from '@angular/core';
import { RestClient } from '../httpClient';
import { ProductRepository } from '../../domain/product/data-access/ProductRepository';

export class ProductController implements ProductRepository {
  private RestClient = new RestClient();

  getAllProducts() {
    return this.RestClient.get<Product[]>('products')
  }
}