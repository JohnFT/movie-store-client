import { Injectable } from '@angular/core'

import { Observable } from 'rxjs'
import { environment } from 'packages/moviestore/src/environments/environment.prod'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private http: HttpClient) {}

  public logIn(pass: string, user: string): Observable<Account> {
    return this.http.post<Account>(environment.urls + 'account/login', {
      pass,
      user
    })
  }

  public logOut(id: number): Observable<Account> {
    return this.http.get<Account>(environment.urls + 'api/rental/logout/' + id)
  }

  public add(account: Account): Observable<Account> {
    return this.http.post<Account>(environment.urls + 'api/rental', account)
  }

  public update(account: Account): Observable<Account> {
    return this.http.put<Account>(environment.urls + 'api/rental', account)
  }
}
