import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/search/search.module').then(m => m.SearchModule)
  },
  {
    path: 'product/:id',
    loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule)
  },
  {
    path: 'category/:id',
    loadChildren: () => import('./pages/category/category.module').then(m => m.CategoryModule)
  },
  {
    path: 'checkout/:id',
    loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule)
  },
  {
    path: 'thank-you',
    loadChildren: () => import('./pages/thankyou/thankyou.module').then(m => m.ThankyouModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
