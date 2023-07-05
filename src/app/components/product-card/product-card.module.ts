import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ProductCardComponent } from './product-card.component';



@NgModule({
  declarations: [ProductCardComponent],
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  exports: [ProductCardComponent]
})
export class ProductCardModule { }
