import { SearchProductDto } from 'src/app/models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models';
import { environment } from 'src/environments/environment';
import { Observable, map, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl!: string;

  constructor(private readonly http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}products?limit=10`);
  }

  searchProducts(searchProduct: SearchProductDto): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}products${searchProduct.getParams()}`);
  }

  getProductById(id: number) {
    return this.http.get<Product>(`${this.baseUrl}products/${id}`);
  }

  getProductsByCategory(categoryId: number, offset: number, limit: number) {
    return this.http.get<Product[]>(`${this.baseUrl}products?categoryId=${categoryId}&offset=${offset}&limit=${limit}`).pipe(
      map(products => {
        if (categoryId === 2) {
          return products.map((product) => {
            product.price = Math.floor(Math.random() * (1000 - 1 + 1) + 1);
            return product;
          })
        } else {
          return products;
        }
      })
    );
  }
}
