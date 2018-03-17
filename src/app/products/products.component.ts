import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../model/category';

@Component({
  selector: 'sm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  categories$;
  category;
  constructor(private categoryService: CategoryService) { }



  ngOnInit() {
    this.categories$ = this.categoryService.getCategories();
  }
  changeCategory(category?: Category){
    this.category = category;
  }
}
