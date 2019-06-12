import { Component, OnInit } from '@angular/core'
import { RentService } from '../shared/services/rent.service'
import { MovieService } from '../shared/services/movie.service'
import { Account } from '../shared/models/account'
import { Movie } from '../shared/models/movie'
import { take } from 'rxjs/operators'
@Component({
  selector: 'app-myrents',
  templateUrl: './myrents.component.html',
  styleUrls: ['./myrents.component.scss']
})
export class MyrentsComponent implements OnInit {
  public account: Account
  public movies: Movie[]

  constructor(private rentServie: RentService, private service: MovieService) {
    this.account = localStorage.getItem('movies_user')
      ? JSON.parse(localStorage.getItem('movies_user'))
      : null
  }

  ngOnInit() {
    this.rentServie
      .findByAccount(this.account.id)
      .pipe(take(1))
      .subscribe(rents => {
        const ids = rents.map(re => re.id).join(',')
        this.getMovies(ids)
      })
  }

  private getMovies(ids: string) {
    this.service
      .getAllByIds(ids)
      .pipe(take(1))
      .subscribe(movies => {
        this.movies = movies
      })
  }
}
