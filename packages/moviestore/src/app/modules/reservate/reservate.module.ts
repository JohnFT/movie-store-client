import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservateRoutingModule } from './reservate-routing.module';
import { ReservateComponent } from './reservate.component';

@NgModule({
  declarations: [ReservateComponent],
  imports: [
    CommonModule,
    ReservateRoutingModule
  ]
})
export class ReservateModule { }
