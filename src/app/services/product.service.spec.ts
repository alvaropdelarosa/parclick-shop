import { ProductService } from './product.service';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product, SearchProductDto } from '../models';
import { createProductFixture, createProductsFixture } from '../models/fixture';

describe('ProductService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: ProductService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new ProductService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all products', (done: DoneFn) => {
    const expected: Product[] = createProductsFixture();

    httpClientSpy.get.and.returnValue(of(expected));

    service.getAllProducts().subscribe({
      next: products => {
        expect(products)
          .withContext('expected products')
          .toEqual(expected);
        done();
      },
      error: done.fail
    });
    expect(httpClientSpy.get.calls.count())
      .withContext('one call')
      .toBe(1);
  });

  it('should search products', (done: DoneFn) => {
    const filters: SearchProductDto = {
      title: 'Intelligent',
      price_min: null,
      price_max: null,
      categoryId: null,
      limit: null,
      offset: null,
      getParams: function (): string {
        return `?title=${this.title}`;
      }
    };

    const expected: Product[] = createProductsFixture()
      .filter((product) => {
        if (!filters.title) {
          return false;
        }

        return product.title.toLowerCase().includes(filters.title?.toLowerCase());
      });

    httpClientSpy.get.and.returnValue(of(expected));

    service.searchProducts(filters).subscribe({
      next: products => {
        expect(products)
          .withContext('expected products')
          .toEqual(expected);
        done();
      },
      error: done.fail
    });
    expect(httpClientSpy.get.calls.count())
      .withContext('one call')
      .toBe(1);
  });

  it('should get a single product', (done: DoneFn) => {
    const expected: Product = createProductFixture();

    httpClientSpy.get.and.returnValue(of(expected));

    service.getProductById(14).subscribe({
      next: products => {
        expect(products)
          .withContext('expected products')
          .toEqual(expected);
        done();
      },
      error: done.fail
    });
    expect(httpClientSpy.get.calls.count())
      .withContext('one call')
      .toBe(1);
  });

  it('should search products', (done: DoneFn) => {
    const expected: Product[] = createProductsFixture()
      .filter((product) => {
        return product.category.id === 4;
      })
      .slice(0, 10);

    httpClientSpy.get.and.returnValue(of(expected));

    service.getProductsByCategory(4, 0, 10).subscribe({
      next: products => {
        expect(products)
          .withContext('expected products')
          .toEqual(expected);

        expect(products.length).toBeLessThanOrEqual(10);

        done();
      },
      error: done.fail
    });
    expect(httpClientSpy.get.calls.count())
      .withContext('one call')
      .toBe(1);
  });
});
