import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CategoryRoutingModule } from './category.routing';
import { ProductCardModule } from 'src/app/components/product-card/product-card.module';


@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ProductCardModule
  ]
})
export class CategoryModule { }
