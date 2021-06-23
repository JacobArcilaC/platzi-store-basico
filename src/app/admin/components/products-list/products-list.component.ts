import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@core/services/products/products.service';
import { Product } from '@core/models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
    private productsService: ProductsService) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts()
    .subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(id: string) {
    this.productsService.deleteProduct(id)
    .subscribe(isDeleted => {
      if (isDeleted) {
        this.products.forEach((product, index) => {
          if (product.id === id) {
            this.products.slice(index, 1);
          }
        });
      }
    });
  }

}
