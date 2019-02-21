import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductService} from './product/product.service';
import {ProductModule} from './product/product.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ProductsRoutingModule} from './product/products-routing.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    HttpClientModule,
    ProductsRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
