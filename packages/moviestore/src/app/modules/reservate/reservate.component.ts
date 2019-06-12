import { Component, OnInit } from '@angular/core'
import { Rental } from '../shared/models/rental'
import { ActivatedRoute, Router } from '@angular/router'
import { RentService } from '../shared/services/rent.service'
import { take } from 'rxjs/operators'

@Component({
  selector: 'app-reservate',
  templateUrl: './reservate.component.html',
  styleUrls: ['./reservate.component.scss']
})
export class ReservateComponent implements OnInit {
  public rental: Rental
  public message: string
  public title: string
  public state: number

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private service: RentService
  ) {}

  ngOnInit() {
    this.router.params.subscribe(param => {
      const id = param.id
      this.getRent(id)
    })
  }

  private getRent(id: number): void {
    this.service
      .findById(id)
      .pipe(take(1))
      .subscribe(rent => {
        if (!rent) {
          this.route.navigate(['/ms', 'movies'])
        }
        if (!rent.initDate) {
          rent.initDate = rent.initDate || new Date()
          this.state = 1
          this.update(rent)
        } else if (!rent.deliveryDate) {
          rent.deliveryDate = rent.deliveryDate || new Date()
          this.state = 2
          this.update(rent)
        }
      })
  }

  private update(rent: Rental) {
    this.service
      .update(rent)
      .pipe(take(1))
      .subscribe(res => {
        console.log(res)
        this.title = 'Felicidades'
        if (this.state === 1) {
          this.message =
            'Te enviamos un correo electronico con el codigo Qr necesario para devolver la película en nuestros puntos de entrega click para reenviar el correo electronico'
        } else {
          this.message = 'Gracias por utiizar nuestro sevicio'
        }
      })
  }
}
