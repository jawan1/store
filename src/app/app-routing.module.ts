import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsListComponent} from './product/products-list/products-list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'products'},
  {path: 'products', component: <any>ProductsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
