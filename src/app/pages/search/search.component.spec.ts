import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category.service';
import { CategoryServiceMock } from 'src/app/services/category.service.mock';
import { ProductServiceMock } from 'src/app/services/product.service.mock';
import { ActivatedRoute, Router, convertToParamMap } from '@angular/router';
import { EmptyComponentModule } from 'src/app/testing/empty/empty.module';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { ProductCardModule } from 'src/app/components/product-card/product-card.module';
import { FiltersComponent } from './components/filters/filters.component';
import { of } from 'rxjs';
import { SearchProductDto } from 'src/app/models';
import { EmptyComponent } from 'src/app/testing/empty/empty.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let route: ActivatedRoute;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent, FiltersComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        SliderModule,
        ProductCardModule,
        EmptyComponentModule,
        RouterTestingModule.withRoutes([
          {
            path: 'products',
            component: EmptyComponent
          }
        ])
      ],
      providers: [
        {
          provide: ProductService,
          useClass: ProductServiceMock
        },
        {
          provide: CategoryService,
          useClass: CategoryServiceMock
        },
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(convertToParamMap({ title: 'Intelligent' })),
            queryParamMap: of(convertToParamMap({ title: 'Intelligent' }))
          }
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    route = TestBed.inject(ActivatedRoute);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search products by route params', () => {
    expect(component.filters.title).toBe('Intelligent');
    expect(component.products.length).toBeGreaterThan(0);
  });

  it('should navigate after filters change', fakeAsync(() => {
    component.onFilterChanged({
      title: 'test',
      price_min: null,
      price_max: null,
      categoryId: null,
      limit: null,
      offset: null
    } as SearchProductDto);

    tick(1);
    expect(router.url).toBe('/products?title=test');
  }));
});
