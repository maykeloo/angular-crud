import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from '../../../../domain/product/components/product-form/product-form.component';
import { CreateProduct, Product } from '../../../../domain/product/model/Product';
import { ProductService } from '../../../../domain/product/data-access/product.service';
import { ProductController } from '../../../../infrastructure/web/ProductController';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'angular-crud-edit',
  standalone: true,
  imports: [CommonModule, ProductFormComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
  providers: [
    {
      provide: ProductService,
      useFactory: () => new ProductService(new ProductController())
    }
  ]
})
export class EditComponent implements OnInit {
  private productService = inject(ProductService);
  private activatedRoute = inject(ActivatedRoute);
  product: Product | null = null;
  productId = this.activatedRoute.params.pipe<string>(map((p) => p['productId']));

  updateProduct(values: CreateProduct) {
    this.productId.subscribe((productId) => {
      const payload: Product = {
        name: values.name,
        price: values.price,
        id: productId
      };
      this.productService.$updateProduct(payload).subscribe();
    });
  }

  ngOnInit() {
    this.productId.subscribe((id) => {
      this.productService.$getProduct(id).subscribe((product) => {
        console.log({product})
        this.product = product;
      });
    });
  }
}
