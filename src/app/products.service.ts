import { Subject } from 'rxjs';

export class ProductsService {
  products = ['Java  new ', 'Angular new '];
  productsUpdated = new Subject();

  addProducts(productName: string) {
    this.products.push(productName);
    this.productsUpdated.next(productName);
  }

  removeProduct(productName: string) {
    this.products = this.products.filter((p) => p !== productName);
    this.productsUpdated.next(productName);
  }

  getProducts() {
    return [...this.products];
  }
}
