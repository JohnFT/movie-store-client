import { Component, OnInit } from '@angular/core'
import { RentService } from '../shared/services/rent.service'
import { MovieService } from '../shared/services/movie.service'
import { Account } from '../shared/models/account'
import { Movie } from '../shared/models/movie'
import { take } from 'rxjs/operators'
import { Rent } from '../shared/models/rent'
@Component({
  selector: 'app-myrents',
  templateUrl: './myrents.component.html',
  styleUrls: ['./myrents.component.scss']
})
export class MyrentsComponent implements OnInit {
  public account: Account
  public rents: Rent[] = []

  constructor(private rentServie: RentService, private service: MovieService) {
    this.account = localStorage.getItem('movies_user')
      ? JSON.parse(localStorage.getItem('movies_user'))
      : null
  }

  ngOnInit() {
    this.service
      .findByAccount(this.account.id)
      .pipe(take(1))
      .subscribe(rents => {
        this.rents = rents
      })
  }

  public getState(rental: Rent): string {
    if (!rental.initDate) {
      return 'En almacen'
    }
    if (!rental.deliveryDate) {
      return 'En prestamo'
    }

    return 'Entregada'
  }
}
