import { Component } from '@angular/core';
import { Product } from './products.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Stage';
  productTitle:string = 'new product';
  productPrice:number = 5;
  productSale:number = 7;

  products: Product[] = [
    new Product('test', 1, 0 ),
    new Product('test', 1, 0)
  ]

  public addProducts() {
    console.log('test')
    this.products.push(
      new Product(this.productTitle, this.productPrice, this.productSale)
    )
  }
}
