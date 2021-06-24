import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductsService } from '@core/services/products/products.service';
import { Product } from '@core/models/product.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.product$ = this.route.params
    .pipe(switchMap((params: Params) => {
      return this.productsService.getProduct(params.id)
    }))
  }

  createProduct() {
    const newProduct: Product = {
      id: '222',
      title: 'nuevo desde angular',
      image: 'assets/images/mug.png',
      price: 3000,
      description: 'nuevo producto'
    };

    this.productsService.createProduct(newProduct).subscribe(product => {
      console.log(product);
    });
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      price: 555555,
      description: 'edicion titulo'
    };
    this.product$ = this.product$.pipe(switchMap(product => {
      return this.productsService.updateProduct(product.id, updateProduct)
    }));
  }

  deleteProduct() {
    this.product$.pipe(switchMap(product => {
      return this.productsService.deleteProduct(product.id)
    })).subscribe(rta => {
      console.log(rta);
    });
  }

  getRandomUsers(){
    this.productsService.getRandomUsers()
    .subscribe(users => {
        console.log(users)
      },
      error => {
        console.error(error)
      }
    );
  }

}
