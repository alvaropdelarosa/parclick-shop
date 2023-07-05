import { Category } from './../models/category.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl!: string;
  categories: ReplaySubject<Category[]> = new ReplaySubject<Category[]>(1);

  constructor(private readonly http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}categories`);
  }

  setCategories(categories: Category[]) {
    this.categories.next(categories);
  }

  getCategoryById(id: number) {
    return this.http.get<Category>(`${this.baseUrl}categories/${id}`);
  }
}
