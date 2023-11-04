import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { product } from '../../../models/product.js';

import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productsArray = [];

  text: string

  @ViewChild('productlist')
  productlist : any

  @Input()
  selectedFilter : string


  @Output()
  selectedProdEmitter = new EventEmitter();

  @Input()
  textSearched  =  '' ;

  constructor(private prodservice: ProductService, private activatedRoute : ActivatedRoute) {

  }

  ngOnInit() {
    // this.prodservice.getProducts().subscribe(
    //   (res: any) => {
    //     console.log('response: ', res);
    //     this.productsArray = res.products;
    //   }
    // );

    this.productsArray =  this.activatedRoute.snapshot.data['items'].products
    console.log(this.productsArray);


  }

  onProductClick(product: product) {
    window.scrollTo(0, 0);
    this.selectedProdEmitter.emit(product);
  }
}
