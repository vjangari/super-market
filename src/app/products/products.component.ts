import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../model/category';
import { ProductService } from '../product.service';

@Component({
  selector: 'sm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products$;
  constructor(private productService: ProductService) {
    this.products$ = productService.getAll();
  }
}
