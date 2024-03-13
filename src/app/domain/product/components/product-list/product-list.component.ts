import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../model/Product';
import { Router } from '@angular/router';
import { ProductService } from '../../data-access/product.service';

@Component({
  selector: 'angular-crud-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input({ required: true }) products: Product[] = [];
  private productsService = inject(ProductService);
  router = inject(Router)

  goToProductDetails(productId: string) {
    return this.router.navigate(['products', 'edit', productId])
  }

  deleteProduct(event: Event, productId: string) {
    event.stopPropagation();
    this.productsService.$deleteProduct(productId).subscribe(() => {
      this.products = this.products.filter(product => product.id !== productId);
    })
  }
}
