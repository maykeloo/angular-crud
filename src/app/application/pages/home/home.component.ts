import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../domain/product/model/Product';
import { ProductService } from 'src/app/domain/product/data-access/product.service';
import { ProductController } from '../../../infrastructure/web/ProductController';

@Component({
  selector: 'angular-crud-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [
    {
      provide: ProductService,
      useFactory: () => new ProductService(new ProductController()),
    }
  ]
})
export class HomeComponent implements OnInit {
  ProductService: ProductService = inject(ProductService);
  products: Product[] = [];

  getAllProducts() {
    console.log('test1')
    this.ProductService.$getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }

  ngOnInit() {
    this.getAllProducts();
  }
}
