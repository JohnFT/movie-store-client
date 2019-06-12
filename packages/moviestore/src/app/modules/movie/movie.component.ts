import { Component, OnInit } from '@angular/core'
import { take } from 'rxjs/operators'
import { MovieService } from '../shared/services/movie.service'
import { StockService } from '../shared/services/stock.service'
import { RentService } from '../shared/services/rent.service'
import { ActivatedRoute, Router } from '@angular/router'
import { Movie } from '../shared/models/movie'
import { Rental } from '../shared/models/rental'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  public id: number
  public rental: Rental
  public movie: Movie

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private rentalService: RentService,
    private stockService: StockService,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.id = params.id
      this.getRental(this.id)
    })
  }

  private getRental(id: number): void {
    this.rentalService
      .findById(id)
      .pipe(take(1))
      .subscribe(rental => {
        this.rental = rental

        if (rental && rental.id) {
          this.getStock(this.rental.stock)
        } else {
          this.route.navigate(['/ms', 'movies'])
        }
      })
  }

  private getStock(id: number): void {
    this.stockService
      .findById(id)
      .pipe(take(1))
      .subscribe(stock => {
        this.getMovie(stock.movie)
      })
  }

  private getMovie(id: number): void {
    this.movieService
      .findById(id)
      .pipe(take(1))
      .subscribe(movie => {
        this.movie = movie
      })
  }
}
