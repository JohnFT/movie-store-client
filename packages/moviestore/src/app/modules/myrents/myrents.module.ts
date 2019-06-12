import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyrentsRoutingModule } from './myrents-routing.module';
import { MyrentsComponent } from './myrents.component';

@NgModule({
  declarations: [MyrentsComponent],
  imports: [
    CommonModule,
    MyrentsRoutingModule
  ]
})
export class MyrentsModule { }
