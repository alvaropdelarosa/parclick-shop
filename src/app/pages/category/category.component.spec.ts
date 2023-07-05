import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryComponent } from './category.component';
import { ProductCardModule } from 'src/app/components/product-card/product-card.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { CategoryServiceMock } from 'src/app/services/category.service.mock';
import { ProductService } from 'src/app/services/product.service';
import { ProductServiceMock } from 'src/app/services/product.service.mock';

describe('CategoryComponent', () => {
  let component: CategoryComponent;
  let fixture: ComponentFixture<CategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryComponent],
      imports: [
        ProductCardModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of(convertToParamMap({ id: 10 }))
          }
        },
        {
          provide: ProductService,
          useClass: ProductServiceMock
        },
        {
          provide: CategoryService,
          useClass: CategoryServiceMock
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
