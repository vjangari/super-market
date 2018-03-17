import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'sm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  categories$;

  constructor(private categoryService: CategoryService) { }



  ngOnInit() {
    this.categories$ = this.categoryService.getCategories();
  }

}
