import { Component, EventEmitter, Inject, OnInit, Output, inject } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { iproducts } from 'src/app/services/interfaces/Iproducts.interface';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  cartlength: any;
  constructor(private cartService : CartService){

  }

  ngOnInit() {
    this.cartService.getAllCartItems().subscribe((items : any)=>{
      console.log(items);

      this.cartlength = items.length;
    })

    console.log(this.cartlength);

  }

  @Output()
  themeEmmiter = new EventEmitter();

  isDarkTheme = true;

  onThemeChange() {
    this.isDarkTheme = !this.isDarkTheme;

    this.themeEmmiter.emit(this.isDarkTheme);
  }

  onclick() {
    location.assign('');
  }



}
