import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  cartItemsArray = [];

  cartItems = new BehaviorSubject<any>([]);

  addToCart(product: any) {
    this.cartItemsArray.push(product);
    this.cartItems.next(this.cartItemsArray);
  }

  getAllCartItems() {
   return this.cartItems.asObservable()
  }

  emptyCartItems() {
    this.cartItemsArray = [];
    this.cartItems.next(this.cartItemsArray);
  }

  deleteItem(product : any){
    this.cartItemsArray.map((item,index)=>{
        if(item.id == product.id){
            this.cartItemsArray.splice(index,1);
        }
    })

  }


  totalCartPrice(){
   let TotalcartValue =  this.cartItemsArray.reduce((acc,item)=>{
     let productPrice = (item.price - ((item.discountPercentage / 100) * item.price))


     acc = productPrice + acc

      console.log(acc);


     return acc

    },0)



    TotalcartValue =  TotalcartValue.toString()

    TotalcartValue.slice(0,-1)

    return TotalcartValue
  }




}
