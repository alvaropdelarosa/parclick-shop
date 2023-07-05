import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product.routing';
import { CarouselModule } from 'primeng/carousel';
import { ErrorRedirectorModule } from 'src/app/components/error-redirector/error-redirector.module';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    CarouselModule,
    ErrorRedirectorModule
  ]
})
export class ProductModule { }
