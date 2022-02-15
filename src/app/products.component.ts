import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productName: string = 'A pen';
  isDisabled = true;
  products: string[] = [];

  constructor(private productsService: ProductsService) {
    setTimeout(() => {
      this.isDisabled = false;
    }, 3000);
  }
  onAddProduct(form: any) {
    if (form.valid) {
      this.productsService.addProducts(form.value.productName);
    }
  }
  ngOnInit(): void {
    this.productsService.productsUpdated.subscribe(
      () => (this.products = this.productsService.getProducts())
    );
  }

  removeOnclicked(productName: string) {
    this.productsService.removeProduct(productName);
  }
}
