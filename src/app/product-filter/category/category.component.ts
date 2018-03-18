import { Component, OnInit } from '@angular/core';
import { Category } from '../../model/category';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'sm-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories$;
  category: Category;
  constructor(private categoryService: CategoryService) { }



  ngOnInit() {
    this.categories$ = this.categoryService.getCategories();
  }
  changeCategory(category?: Category) {
    this.category = category;
  }

}
