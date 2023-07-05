import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(
    private readonly router: Router
  ) { }

  showDetail(id: number) {
    this.router.navigate([`/product/${id}`]);
  }

  checkout(id: number) {
    this.router.navigate([`/checkout/${id}`]);
  }
}
