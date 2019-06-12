import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router'
import { Observable } from 'rxjs'
import { CanActivate } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const session = localStorage.getItem('movies_user')
      ? JSON.parse(localStorage.getItem('movies_user'))
      : null

    if (!session) {
      this.router.navigate(['/'])
      console.log('logout')
      return false
    }

    return true
  }
}
