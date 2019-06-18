import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SignInRoutingModule } from './sign-in-routing.module'
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in.component';

@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    SignInRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class SignInModule {}
