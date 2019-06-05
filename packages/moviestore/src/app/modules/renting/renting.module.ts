import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentingRoutingModule } from './renting-routing.module';
import { RentingComponent } from './renting.component';
import { MatButtonModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [RentingComponent],
  imports: [
    CommonModule,
    RentingRoutingModule,
    SharedModule
  ]
})
export class RentingModule { }
