import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LayoutComponent } from './layout.component'

const childrens: Routes = [
  { path: 'movies', loadChildren: '../movies/movies.module#MoviesModule' },
  { path: 'renting', loadChildren: '../renting/renting.module#RentingModule' },
  { path: 'message', loadChildren: '../messages/messages.module#MessagesModule' }
]
const routes: Routes = [{ path: '', component: LayoutComponent, children: childrens }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
