import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { ProductService } from './product.service';
import { iproducts } from './interfaces/Iproducts.interface';

@Injectable()
export class itemresolverResolver implements Resolve<iproducts> {
  constructor(private productService: ProductService) {}

   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return  this.productService.getProducts()
   }
}
