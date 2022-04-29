import { Component, OnInit } from '@angular/core';
import { Product } from '../products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productTitle: string = 'new new product';
  productPrice: number = 5;
  productSale: number = 7;

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

  constructor() { }

  ngOnInit(): void {
  }

}
