import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../domain/product/model/Product';
import { ProductService } from 'src/app/domain/product/data-access/product.service';
import { ProductController } from '../../../infrastructure/web/ProductController';
import { ProductListComponent } from '../../../domain/product/components/product-list/product-list.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'angular-crud-products',
  standalone: true,
  imports: [CommonModule, ProductListComponent, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [
    {
      provide: ProductService,
      useFactory: () => new ProductService(new ProductController()),
    }
  ]
})
export class ProductsComponent implements OnInit {
  ProductService: ProductService = inject(ProductService);
  products: Product[] = [];

  getAllProducts() {
    this.ProductService.$getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }

  ngOnInit() {
    this.getAllProducts();
  }
}
