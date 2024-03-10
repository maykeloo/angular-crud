import { from, Observable } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { ProductController } from '../../../infrastructure/web/ProductController';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productController: ProductController = inject(ProductController);

  getAllProducts(): Observable<Product[]> {
    return from(this.productController.getAllProducts());
  }
}