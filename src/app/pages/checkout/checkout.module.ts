import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { DialogModule } from 'primeng/dialog';
import { CheckoutRoutingModule } from './checkout.routing';
import { MessageService } from 'primeng/api';
import { LoginFormModule } from 'src/app/components/login-form/login-form.module';
import { ErrorRedirectorModule } from 'src/app/components/error-redirector/error-redirector.module';


@NgModule({
  declarations: [
    CheckoutComponent,
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    DialogModule,
    LoginFormModule,
    ErrorRedirectorModule
  ],
  providers: [
    MessageService
  ]
})
export class CheckoutModule { }
