import { Observable, ReplaySubject, of } from "rxjs";
import { Category } from "../models";
import { createCategoriesFixture, createCategoryById } from "../models/fixture";

export class CategoryServiceMock {
  private baseUrl!: string;
  categories: ReplaySubject<Category[]> = new ReplaySubject<Category[]>();

  constructor() {
    this.baseUrl = "https://api.escuelajs.co/api/v1/";
    this.categories.next(createCategoriesFixture());
  }

  getAllCategories(): Observable<Category[]> {
    return of(createCategoriesFixture());
  }

  getCategoryById(id: number): Observable<Category> {
    return of(createCategoryById(id));
  }

  setCategories(categories: Category[]) {
    this.categories.next(categories);
  }
}