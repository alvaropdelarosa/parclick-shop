import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { take } from 'rxjs';
import { Product } from 'src/app/models';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  product!: Product;
  hasError = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private readonly productService: ProductService,
    private readonly titleService: Title,
    private metaTagService: Meta
  ) {
    this.titleService.setTitle('Parclick');
    this.metaTagService.updateTag({ name: 'description', content: 'Parclick Shop Product' });
    this.route.params
      .subscribe({
        next: (params: Params) => {
          const productId = Number(params['id']);
          this.getProduct(productId);
        }
      });
  }

  getProduct(id: number) {
    this.productService.getProductById(id).pipe(
      take(1)
    )
      .subscribe({
        next: (value) => {
          this.product = value;
          this.titleService.setTitle(`Parclick | ${this.product.title}`);
          this.metaTagService.updateTag({ name: 'description', content: `Parclick Shop ${this.product.title}` });
        },
        error: (err) => {
          this.hasError = true;
        }
      }
      );
  }

  checkout() {
    this.router.navigate([`/checkout/${this.product.id}`]);
  }
}
