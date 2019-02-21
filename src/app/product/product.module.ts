import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [ProductsListComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    ProductsListComponent,
    ProductDetailComponent
  ]
})
export class ProductModule { }
