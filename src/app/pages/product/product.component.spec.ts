import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { CarouselModule } from 'primeng/carousel';
import { ActivatedRoute, Router, convertToParamMap } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ProductServiceMock } from 'src/app/services/product.service.mock';
import { first, of, throwError } from 'rxjs';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let route: ActivatedRoute;
  let service: ProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductComponent],
      imports: [
        CarouselModule,
      ],
      providers: [
        {
          provide: ProductService,
          useClass: ProductServiceMock
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of(convertToParamMap({ id: 6 })),
            paramMap: of(convertToParamMap({ id: 6 })),
            queryParamMap: of(convertToParamMap({ id: 6 }))
          }
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    route = TestBed.inject(ActivatedRoute);
    service = TestBed.inject(ProductService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
