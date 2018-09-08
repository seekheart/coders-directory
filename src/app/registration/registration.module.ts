import { NgModule } from '@angular/core';

import { RegistrationRoutingModule } from './registration-routing.module';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    RegistrationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    UserRegistrationComponent
  ]
})
export class RegistrationModule {
}
