import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservateComponent } from './reservate.component';

const routes: Routes = [
  {path: ':id', component: ReservateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservateRoutingModule { }
