import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Stock } from '../models/stock';
import { environment } from 'packages/moviestore/src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockService {

 
  constructor(private http: HttpClient) {}


  public findById(id: number): Observable<Stock> {
    return this.http.get<Stock>(environment.urls + 'stock/' + id)
  }

  public add(Stock: Stock): Observable<boolean> {
    return this.http.post<boolean>(environment.urls + 'stock', Stock)
  }

  public update(Stock: Stock): Observable<boolean> {
    return this.http.put<boolean>(environment.urls + 'stock', Stock)
  }
}
