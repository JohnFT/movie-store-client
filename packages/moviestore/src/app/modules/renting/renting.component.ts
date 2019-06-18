import { Component, OnInit } from '@angular/core'
import { MovieService } from '../shared/services/movie.service'
import { RentService } from '../shared/services/rent.service'
import { Router, ActivatedRoute } from '@angular/router'
import { take } from 'rxjs/operators'
import { Movie } from '../shared/models/movie'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Rental } from '../shared/models/rental'

@Component({
  selector: 'app-renting',
  templateUrl: './renting.component.html',
  styleUrls: ['./renting.component.scss']
})
export class RentingComponent implements OnInit {
  public movie: Movie
  public form: FormGroup
  public count: number
  public message: string
  constructor(
    private route: Router,
    private ar: ActivatedRoute,
    private movieSrevice: MovieService,
    private service: RentService,
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      unity: [0, [Validators.required, Validators.min(1), Validators.max(20)]]
    })
  }

  ngOnInit() {
    this.ar.params.subscribe(param => {
      const id = param['id']
      if (!id) {
        return
      }

      this.getMovie(id)
      this.getAviliability(id)
    })
  }

  public getMovie(id: number) {
    this.movieSrevice
      .findById(id)
      .pipe(take(1))
      .subscribe(movie => {
        this.movie = movie
      })
  }

  public getAviliability(id: number) {
    this.movieSrevice
      .getCountMovies(id)
      .pipe(take(1))
      .subscribe(count => {
        this.count = count
      })
  }

  public getError(controlName: string): string {
    const control = this.form.get(controlName)
    return control.hasError('required')
      ? 'You must enter a value'
      : control.hasError('min')
      ? 'Min value 1'
      : control.hasError('max')
      ? 'Max value 20'
      : ''
  }

  public calculate() {
    return this.form.value.unity * this.movie.price
  }

  public rent() {
    if (this.form.invalid) {
      return
    }
    const account = localStorage.getItem('movies_user')
      ? JSON.parse(localStorage.getItem('movies_user'))
      : null
    const rental: Rental = {
      id: null,
      movie: this.movie.id,
      initDate: null,
      days: this.form.value.unity,
      deliveryDate: null,
      price: this.calculate(),
      account: account.id,
      date: new Date()
    }

    this.service.add(rental).subscribe((res: any) => {
      if (res.error) {
        this.message = res.message
        return
      }
      console.log(res)
      if (!res) {
        return this.route.navigate(['ms', 'message', 2])
      }
      return this.route.navigate(['ms', 'message', 1])
    })
  }

  public addDays(date, days) {
    const result = new Date(date)
    result.setDate(result.getDate() + days)
    return result
  }
}
