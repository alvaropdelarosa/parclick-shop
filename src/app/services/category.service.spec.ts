import { TestBed } from '@angular/core/testing';
import { CategoryService } from './category.service';
import { of } from 'rxjs';
import { createCategoriesFixture, createCategoryById } from '../models/fixture';
import { Category } from '../models';
import { HttpClient } from '@angular/common/http';

describe('CategoryService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: CategoryService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new CategoryService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all categories', (done: DoneFn) => {
    const expected: Category[] = createCategoriesFixture();

    httpClientSpy.get.and.returnValue(of(expected));

    service.getAllCategories().subscribe({
      next: categories => {
        expect(categories)
          .withContext('expected categories')
          .toEqual(expected);
        done();
      },
      error: done.fail
    });
    expect(httpClientSpy.get.calls.count())
      .withContext('one call')
      .toBe(1);
  });

  it('should get one category', (done: DoneFn) => {
    const expected: Category = createCategoryById(1);

    httpClientSpy.get.and.returnValue(of(expected));

    service.getCategoryById(1).subscribe({
      next: category => {
        expect(category)
          .withContext('expected categories')
          .toEqual(expected);
        done();
      },
      error: done.fail
    });
    expect(httpClientSpy.get.calls.count())
      .withContext('one call')
      .toBe(1);
  });

  it('shold set categories', () => {
    service.setCategories(createCategoriesFixture());

    expect(service.categories).toBeDefined()
  });
});
