import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { take } from 'rxjs';
import { Category, Product } from 'src/app/models';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  private limit: number = 10;
  disableNext = false;
  page: number = 1;
  offset: number = 0;
  category!: Category;
  products!: Product[];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly categoryService: CategoryService,
    private readonly productService: ProductService,
    private metaTagService: Meta,
    private titleService: Title
  ) {
    this.titleService.setTitle(`Parclik | Categorías`);
    this.metaTagService.updateTag({ name: 'description', content: 'Parclick Shop Categorías' });
    this.route.params
      .subscribe({
        next: (params: Params) => {
          const categoryId = Number(params['id']);
          this.getCategory(categoryId);
          this.getProductsByCategory(categoryId);
        }
      });
  }

  private getCategory(id: number) {
    this.categoryService.getCategoryById(id)
      .pipe(
        take(1)
      )
      .subscribe({
        next: (value: Category) => {
          this.category = value;
          this.titleService.setTitle(`Parclik | ${this.category.name}`);
          this.metaTagService.updateTag({ name: 'description', content: 'Tienda online Parclick Shop' });
        },
      });
  }

  next() {
    this.page++;
    this.offset += this.limit;

    this.getProductsByCategory(this.category.id);
  }

  previous() {
    if (this.page === 1) {
      return;
    }

    this.page--;
    this.offset -= this.limit;

    this.getProductsByCategory(this.category.id);
  }

  private getProductsByCategory(id: number) {
    this.productService.getProductsByCategory(id, this.offset, this.limit)
      .pipe(
        take(1)
      )
      .subscribe({
        next: (value: Product[]) => {
          this.products = value;

          if (this.products.length < 10) {
            this.disableNext = true;
          }
        }
      });
  }
}
