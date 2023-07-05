import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs';
import { Category, SearchProductDto } from 'src/app/models';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  categories!: Category[];
  filters!: SearchProductDto;

  @Output() filterChanged: EventEmitter<SearchProductDto> = new EventEmitter<SearchProductDto>();

  form!: FormGroup;
  rangeValues: number[] = [1, 100];

  constructor(
    private readonly categoryService: CategoryService,
    private route: ActivatedRoute
  ) {
    this.route.queryParamMap
      .subscribe({
        next: (params: ParamMap) => {
          this.filters = new SearchProductDto({
            title: params.get('title'),
            categoryId: params.get('categoryId') ?? null,
            price_min: params.get('price_min') ?? null,
            price_max: params.get('price_max') ?? null,
            limit: Number(params.get('limit')),
            offset: Number(params.get('offset'))
          });

          this.initForm();
        }
      });

    this.initForm();
  }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe((value) => {
      this.categories = value;
    });
  }

  updateRange(values: number[]) {
    if (values[0] > 0) {
      this.form.controls['minPrice'].setValue(values[0].toString());
    }

    if (values[1] > 0) {
      this.form.controls['maxPrice'].setValue(values[1].toString());
    }
  }

  filter() {
    const filters: SearchProductDto = new SearchProductDto({
      title: this.form.value['title'] !== '' ? this.form.value['title'] : undefined,
      price_min: this.form.value['minPrice'] !== '' ? this.form.value['minPrice'] : undefined,
      price_max: this.form.value['maxPrice'] !== '' ? this.form.value['maxPrice'] : undefined,
      categoryId: this.form.value['category'] !== '' ? this.form.value['category'] : null,
    });
    this.filterChanged.emit(filters);
  }

  reset() {
    this.form = new FormGroup({
      title: new FormControl<string | null>(null),
      category: new FormControl<string>(''),
      minPrice: new FormControl<string | null>(null),
      maxPrice: new FormControl<string | null>(null),
    });

    this.filters = {} as SearchProductDto;

    this.filterChanged.emit(this.filters);
  }

  private initForm() {
    this.form = new FormGroup({
      title: new FormControl<string | null>(this.filters?.title ?? null),
      category: new FormControl<string>(this.filters?.categoryId ?? ''),
      minPrice: new FormControl<string | null>(this.filters?.price_min ?? null),
      maxPrice: new FormControl<string | null>(this.filters?.price_max ?? null),
    });
  }
}
