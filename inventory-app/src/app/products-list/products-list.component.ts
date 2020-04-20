import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from "../product.model";
@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  @Input() productList: Product[];

  @Output() onProductSelected: EventEmitter<Product>;
  private currentProduct: Product;

  constructor() { 
    this.onProductSelected = new EventEmitter();
  }

}
