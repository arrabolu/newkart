import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { product } from 'src/app/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Output()
  closeSideModelEmitter = new EventEmitter();


  @Input()
  selectedProduct: product

  images = [];

  ngOnInit() {

  this.images = this.selectedProduct.images

  }


  onClose(){
    this.closeSideModelEmitter.emit(false)
  }

}
