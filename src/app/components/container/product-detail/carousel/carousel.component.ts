import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {

  ngOnInit() {
    console.log(this.imageArray)
  }

  @Input() imageArray = [];

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    mouseDrag: false,
    touchDrag: false,
    autoWidth:true,
    // pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };
}
