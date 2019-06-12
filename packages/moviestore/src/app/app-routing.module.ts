import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { SessionGuard } from './core/guards/session.guard'

const routes: Routes = [
  { path: '', loadChildren: './modules/login/login.module#LoginModule' },
  {
    path: 'ms',
    loadChildren: './modules/layout/layout.module#LayoutModule',
    canActivate: [SessionGuard]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
