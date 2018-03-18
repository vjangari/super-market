import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import { Product } from '../../model/product';
import { ProductService } from '../../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sm-add-product',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  category$;
  product: Product = new Product();

  constructor(private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router) {
    this.category$ = categoryService.getCategories();
  }

  save(product: Product) {
    this.productService.save(product).then(p => { this.router.navigateByUrl('admin/products'); });
  }

}
