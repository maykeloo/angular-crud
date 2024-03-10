import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../../../domain/product/data-access/product.service';
import { Product } from '../../../../domain/product/model/Product';
import { ProductController } from '../../../../infrastructure/web/ProductController';

@Component({
  selector: 'angular-crud-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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

  formBuilder = inject(FormBuilder);
  form = this.formBuilder.group<Omit<Product, 'uuid'>>({
    name: '',
    price: 0
  });

  createProduct() {
    const payload: Product = {
      name: this.form.value.name || '',
      price: this.form.value.price || 0,
      uuid: Math.random().toString(36).substring(7)
    };

    this.productService.$createProduct(payload).subscribe(() => {
      this.form.reset();
    });
  }
}
