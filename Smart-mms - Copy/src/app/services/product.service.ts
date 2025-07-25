import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getById(productId: string) {
    throw new Error("Method not implemented.");
  }

  private apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

    getAll(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.apiUrl);
  }

    add(productmodel: ProductModel): Observable<ProductModel> {
    return this.http.post<ProductModel>(this.apiUrl, productmodel);
  }

  update(productmodel: ProductModel): Observable<ProductModel> {
    return this.http.put<ProductModel>(`${this.apiUrl}/${productmodel.id}`, productmodel);
  }

  delete(id: string ): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
}