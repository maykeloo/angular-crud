import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../../../domain/product/data-access/product.service';
import { CreateProduct, Product } from '../../../../domain/product/model/Product';
import { ProductController } from '../../../../infrastructure/web/ProductController';
import { ProductFormComponent } from '../../../../domain/product/components/product-form/product-form.component';

@Component({
  selector: 'angular-crud-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ProductFormComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
  providers: [
    {
      provide: ProductService,
      useFactory: () => new ProductService(new ProductController()),
    }
  ]
})
export class CreateComponent {
  private productService = inject(ProductService);

  createProduct(values: CreateProduct) {
    const payload: Product = {
      name: values.name,
      price: values.price,
      id: crypto.randomUUID()
    };

    this.productService.$createProduct(payload).subscribe();
  }
}
