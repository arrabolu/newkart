import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { catchError, finalize, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {

  }

  baseUrl = 'https://dummyjson.com/products'

  getProducts(){
   return this.http.get(this.baseUrl).pipe(
    catchError((err)=>{
      console.log("Error has thrown again with help of catchError ",err);

      return throwError(err);
    }))
  }


}
