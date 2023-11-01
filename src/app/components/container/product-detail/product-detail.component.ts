import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { product } from 'src/app/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private toastr: ToastrService) {

  }

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

  onAddToCart(){
    this.onClose()
    this.toastr.success('Added to Cart', 'Success',{
      timeOut: 3000,
    });
  }

}
