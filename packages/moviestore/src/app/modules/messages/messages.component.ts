import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

class Message {
  title: string
  body: string
  id: number
  url: string
  display: string
}

const messages: Message[] = [
  {
    id: 1,
    title: 'Felicitancios',
    body: `Te enviamos un correo electronico con el codigo Qr necesario para reclamar la película en nuestros puntos de entrega click para reenviar el correo electronico`,
    url: '',
    display: 'Here'
  },
  {
    id: 2,
    title: 'Lo Sentimos',
    body: `Tenemos un error en la solicitud por los visto no has entregado una pelicula`,
    url: '/ms/movies',
    display: 'Volver'
  }
]

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  public message: Message
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(para => {
      if (!para['id']) {
        return
      }
      this.message = messages[para['id'] - 1]
    })
  }
}
