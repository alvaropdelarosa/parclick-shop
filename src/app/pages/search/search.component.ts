import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { take } from 'rxjs';
import { Category, Product, SearchProductDto } from 'src/app/models';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  products: Product[] = [];
  categories!: Category[];
  filters!: SearchProductDto;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private readonly productService: ProductService,
    private titleService: Title,
    private metaTagService: Meta
  ) {
    this.titleService.setTitle('Parclik | Productos');
    this.metaTagService.updateTag({ name: 'description', content: 'Parclick Shop Productos' });

    this.route.queryParamMap
      .subscribe({
        next: (params: ParamMap) => {
          this.filters = new SearchProductDto({
            title: params.get('title'),
            categoryId: params.get('categoryId') ?? null,
            price_min: params.get('price_min') ?? null,
            price_max: params.get('price_max') ?? null,
            limit: Number(params.get('limit')) ?? null,
            offset: Number(params.get('offset')) ?? null
          });

          this.search();
        }
      });
  }

  onFilterChanged(filters: SearchProductDto) {
    this.router.navigate(['products'], {
      queryParams: filters
    });
  }

  search() {
    this.productService.searchProducts(this.filters).pipe(
      take(1)
    )
      .subscribe((value) => {
        this.products = value;
      });;
  }
}
