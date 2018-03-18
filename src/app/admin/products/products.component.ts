import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';

@Component({
  selector: 'sm-manage-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class AdminProductsComponent {
  products$;
  constructor(private productService: ProductService) {
    this.products$ = productService.getAll();
  }

}
