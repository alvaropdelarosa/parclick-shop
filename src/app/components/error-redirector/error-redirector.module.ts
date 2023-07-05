import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorRedirectorComponent } from './error-redirector.component';



@NgModule({
  declarations: [ErrorRedirectorComponent],
  imports: [
    CommonModule
  ],
  exports: [ErrorRedirectorComponent]
})
export class ErrorRedirectorModule { }
