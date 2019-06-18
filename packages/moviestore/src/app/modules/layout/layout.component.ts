import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public showMenu =  false
  constructor(private router: Router) {}

  ngOnInit() {}

  public logOut() {
    localStorage.clear()
    this.router.navigate(['/'])
  }

  public handleMenu() {
    this.showMenu = !this.showMenu
  }
}
