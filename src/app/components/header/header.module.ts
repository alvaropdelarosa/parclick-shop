import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
