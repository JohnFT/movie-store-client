import { Injectable } from '@angular/core'
import { Movie } from '../models/movie'
import { HttpClient } from '@angular/common/http'
import { environment } from 'packages/moviestore/src/environments/environment'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<Movie[]> {
    return this.http.get<Movie[]>(environment.urls + 'movie')
  }

  public getAllByIds(ids: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(environment.urls + 'movie/all?ids=' + ids)
  }

  public findById(id: number): Observable<Movie> {
    return this.http.get<Movie>(environment.urls + 'movie/' + id)
  }

  public getCountMovies(id: number): Observable<number>{
    return this.http.get<number>(environment.urls + 'stock/count/movies/' + id)
  }
}
