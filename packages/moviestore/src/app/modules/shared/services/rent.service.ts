import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Rental } from '../models/rental'
import { Observable } from 'rxjs'
import { environment } from 'packages/moviestore/src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RentService {
  constructor(private http: HttpClient) {}

  public path() {
    return environment.path
  }

  public findById(id: number): Observable<Rental> {
    return this.http.get<Rental>(environment.urls + 'rental/' + id)
  }

  public findByAccount(id: number): Observable<Rental[]> {
    return this.http.get<Rental[]>(environment.urls + 'rental/account/' + id)
  }

  public add(rental: Rental): Observable<boolean> {
    return this.http.post<boolean>(environment.urls + 'rental', rental)
  }

  public update(rental: Rental): Observable<boolean> {
    return this.http.put<boolean>(environment.urls + 'rental', rental)
  }
}
