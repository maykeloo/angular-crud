import { Component, EventEmitter, inject, Input, OnChanges, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CreateProduct, Product } from '../../model/Product';

@Component({
  selector: 'angular-crud-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnChanges {
  @Input() initialFormValue: Product | null = null;
  @Output() confirm = new EventEmitter<CreateProduct>();

  formBuilder = inject(FormBuilder);
  form = this.formBuilder.group<CreateProduct>({
    name: '',
    price: 0
  });

  confirmForm() {
    if (!this.form.value.name || !this.form.value.price) return;
    this.confirm.emit({
      name: this.form.value.name,
      price: this.form.value.price,
    });
    this.form.reset();
  }

  ngOnChanges() {
    console.log('changes', this.initialFormValue);
    if (this.initialFormValue) {
      this.form.patchValue(this.initialFormValue);
    }
  }
}
