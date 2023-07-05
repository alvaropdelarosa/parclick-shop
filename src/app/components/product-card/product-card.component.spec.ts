import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ProductCardComponent } from './product-card.component';
import { NgOptimizedImage } from '@angular/common';
import { EmptyComponent } from 'src/app/testing/empty/empty.component';
import { EmptyComponentModule } from 'src/app/testing/empty/empty.module';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { createProductFixture } from 'src/app/models/fixture';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductCardComponent],
      imports: [
        NgOptimizedImage,
        EmptyComponentModule,
        RouterTestingModule.withRoutes([
          {
            path: 'product/:id',
            component: EmptyComponent
          },
          {
            path: 'checkout/:id',
            component: EmptyComponent
          }
        ])
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    component.product = createProductFixture();
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to product detail', fakeAsync(() => {
    const element = fixture.debugElement.query(By.css('article')).nativeElement;

    element.dispatchEvent(
      new MouseEvent('click', { relatedTarget: element })
    );

    tick(1);
    expect(router.url).toBe('/product/' + component.product.id);
  }));

  it('should navigate to checkout page', fakeAsync(() => {
    const element = fixture.debugElement.query(By.css('button')).nativeElement;

    element.dispatchEvent(
      new MouseEvent('click', { relatedTarget: element })
    );

    tick(1);
    expect(router.url).toBe('/checkout/' + component.product.id);
  }));
});
