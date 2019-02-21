import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../model/product';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Shop} from '../model/shop';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.less']
})
export class ProductDetailComponent implements OnInit {

  private product: Product;

  productForm: FormGroup;
  shopForm: FormGroup;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getOneProduct();
    this.shopForm = this.buildShopForm();
  }

  getOneProduct() {
    const id = this.route.snapshot.params['id'];
    this.productService.getOneProduct(id).subscribe((product) => {
      this.product = product;
      this.productForm = this.buildProductForm();
    });
  }

  buildProductForm() {
    return this.formBuilder.group({
      name: [this.product.name, Validators.required],
      country: [this.product.country, Validators.required],
      price: [this.product.price, Validators.required]
    });
  }

  buildShopForm() {
    return this.formBuilder.group({
      name: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  updateProduct(product: Product) {
    const id = this.route.snapshot.params['id'];
    this.productService.updateProduct(id, product).subscribe(() => {
      this.getOneProduct();
    });
  }

  removeShop (shopNumber: number) {
    this.productService.removeShop(shopNumber).subscribe(() => {
      this.getOneProduct();
    });
  }

  addNewShop (productNumber: number, shop: Shop) {
    this.productService.addNewShop(productNumber, shop).subscribe( () => {
      this.getOneProduct();
    });
  }

}
