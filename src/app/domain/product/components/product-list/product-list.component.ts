import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../model/Product';

@Component({
  selector: 'angular-crud-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input({ required: true }) products: Product[] = [];
}