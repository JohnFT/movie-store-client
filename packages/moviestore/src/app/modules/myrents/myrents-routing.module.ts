import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyrentsComponent } from './myrents.component';

const routes: Routes = [
  {path: '', component: MyrentsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyrentsRoutingModule { }
