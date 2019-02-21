import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';
import {ProductService} from '../product.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.less']
})
export class ProductsListComponent implements OnInit {

  private products: Product[];
  productForm: FormGroup;

  constructor(private productService: ProductService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.getAllProducts();
    this.productForm = this.buildProductForm();
  }

  getAllProducts(): void {
    this.productService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }

  buildProductForm() {
    return this.formBuilder.group({
      name: ['', Validators.required],
      country: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  addNewProduct() {
    this.productService.addNewProduct(this.productForm.value).subscribe(() => {
      this.getAllProducts();
    });
  }

  removeProduct(productNumber: number, event) {
    event.stopPropagation();
    this.productService.removeProduct(productNumber).subscribe(() => {
      this.getAllProducts();
    });
  }

}
