import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _HttpClient: HttpClient) {}

  baseUrl: string = 'https://fakestoreapi.com';

  getAllProductsAPI(): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/products`);
  }

  getLimitedProducts(limit:number): Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}/products?limit=${limit}`);
  }

  getSingleProduct(id:number): Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}/products/${id}`)
  }
}
