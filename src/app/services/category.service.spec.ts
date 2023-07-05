import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CategoryService } from './category.service';
import { first } from 'rxjs';
import { createCategoriesFixture } from '../models/fixture';

describe('CategoryService', () => {
  let service: CategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
    });
    service = TestBed.inject(CategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all categories', () => {
    service.getAllCategories()
      .pipe(
        first()
      )
      .subscribe((categories) => {
        expect(categories.length).toBeGreaterThan(0);
      });
  });

  it('should get one category', () => {
    service.getCategoryById(5)
      .pipe(
        first()
      )
      .subscribe((category) => {
        expect(category).toBeDefined();
        expect(category.id).toBe(5);
      });
  });

  it('shold set categories', () => {
    service.setCategories(createCategoriesFixture());

    service.categories
      .pipe(
        first()
      )
      .subscribe((categories) => {
        expect(categories.length).toBeGreaterThan(0);
      });
  });
});
