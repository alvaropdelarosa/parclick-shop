import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { take } from 'rxjs';
import { Product } from 'src/app/models';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  hasError = false;
  visible: boolean = true;
  product!: Product;

  constructor(
    private readonly userService: UserService,
    private readonly productService: ProductService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly titleService: Title,
    private metaTagService: Meta
  ) {
    this.titleService.setTitle('Parclick | Checkout');
    this.metaTagService.updateTag({ name: 'description', content: 'Parclick Shop Checkout' });
    this.userService.user.subscribe({
      next: (user) => {
        this.visible = !user;
      }
    });

    this.route.params.subscribe({
      next: (params: Params) => {
        this.getProduct(Number(params['id']))
      }
    })
  }

  getProduct(id: number) {
    this.productService.getProductById(id).pipe(
      take(1)
    )
      .subscribe({
        next: (value) => {
          this.product = value;
        },
        error: (err) => {
          this.hasError = true;
        }
      }
      );
  }

  pay() {
    this.router.navigate(['/thank-you']);
  }
}
