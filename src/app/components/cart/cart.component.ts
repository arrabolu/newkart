import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { iproducts } from 'src/app/services/interfaces/Iproducts.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems : any = []
  Subtotal: any;

   today =  Date.now() + 86400000; // today + 24 hours

  constructor(private CartService : CartService){
    console.log(this.today);

  }
  ngOnInit() {
      this.CartService.getAllCartItems().subscribe((items : iproducts)=>{
        this.cartItems = items
      })

      this.totalCartValue()
  }


  onEmptyCart(){
    this.CartService.emptyCartItems()
  }

  onDeleteItem(product : any){
    this.CartService.deleteItem(product)
  }

  totalCartValue(){

    this.Subtotal  = this.CartService.totalCartPrice()
    this.Subtotal = parseInt(this.Subtotal)

  }




}
