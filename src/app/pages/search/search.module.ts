import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search.routing';
import { FiltersComponent } from './components/filters/filters.component';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category.service';
import { SliderModule } from 'primeng/slider';
import { ProductCardModule } from 'src/app/components/product-card/product-card.module';

@NgModule({
  declarations: [SearchComponent, FiltersComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SliderModule,
    ProductCardModule
  ],
  providers: [
    ProductService,
    CategoryService
  ]
})
export class SearchModule { }
