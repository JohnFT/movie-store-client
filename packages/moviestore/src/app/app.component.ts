import { Component } from '@angular/core'
import { SwUpdate } from '@angular/service-worker'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'moviestore'
  constructor(private swUpdate: SwUpdate) {
    if (this.swUpdate.isEnabled) {
      swUpdate.available.subscribe(event => {
        if (confirm('New version available. Load new Verssion?')) {
          window.location.reload()
        }
      })
    }
  }
}
