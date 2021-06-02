import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/login', 
    pathMatch: 'full' 
  },
  {path: 'login', loadChildren: ()=> import('./login/login.module').then((mod)=> mod.LoginModule)},
  {path: 'list', loadChildren: ()=> import('./products/products.module').then((mod)=> mod.ProductsModule)},
  {path: 'feedback', loadChildren: ()=> import('./feedback/feedback.module').then((mod)=> mod.FeedbackModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
