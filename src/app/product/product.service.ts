import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './model/product';
import {Shop} from './model/shop';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/product/all');
  }

  addNewProduct(product) {
    return this.http.post('http://localhost:8080/product/new', product);
  }

  removeProduct(productNumber: number) {
    return this.http.delete('http://localhost:8080/product/' + productNumber);
  }

  getOneProduct(productNumber: number): Observable<Product> {
    return this.http.get<Product>('http://localhost:8080/product/' + productNumber);
  }

  updateProduct(productNumber: number, product: Product) {
    return this.http.put('http://localhost:8080/product/edition/' + productNumber, product);
  }

  removeShop (shopNumber: number) {
    return this.http.delete('http://localhost:8080/shop/' +  shopNumber);
  }

  addNewShop (productNumber: number, shop: Shop) {
    return this.http.post('http://localhost:8080/product/' + productNumber + '/new/shop', shop);
  }
}
