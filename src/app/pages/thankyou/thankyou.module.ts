import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThankyouComponent } from './thankyou.component';
import { ThankYouRoutingModule } from './thankyou.routing';



@NgModule({
  declarations: [
    ThankyouComponent
  ],
  imports: [
    CommonModule,
    ThankYouRoutingModule
  ]
})
export class ThankyouModule { }
