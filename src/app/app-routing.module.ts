import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ECommerceComponent } from './layouts/e-commerce/e-commerce.component'
import { AboutUsComponent } from './layouts/e-commerce/product/about-us/about-us.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: ECommerceComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
  // preloadingStrategy: PreloadAllModules,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
