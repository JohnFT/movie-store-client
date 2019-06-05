import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { RentingComponent } from './renting.component'

const routes: Routes = [{ path: '', component: RentingComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentingRoutingModule {}
