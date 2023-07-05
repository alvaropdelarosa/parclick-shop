import { Observable, of } from "rxjs";
import { Product, SearchProductDto } from "../models";
import { createProductsFixture, getProductByIdFixture, getProductsByCategoryIdFixture, getProductsBySearch } from "../models/fixture";

export class ProductServiceMock {
  private baseUrl!: string;

  constructor() {
    this.baseUrl = "https://api.escuelajs.co/api/v1/";
  }

  getAllProducts(): Observable<Product[]> {
    return of(createProductsFixture());
  }

  searchProducts(searchProduct: SearchProductDto): Observable<Product[]> {
    return of(getProductsBySearch(searchProduct));
  }

  getProductById(id: number) {
    return of(getProductByIdFixture(id));
  }

  getProductsByCategory(categoryId: number, offset: number, limit: number) {
    return of(getProductsByCategoryIdFixture(categoryId, offset, limit));
  }
}
