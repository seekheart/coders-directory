import { NgModule } from '@angular/core';

import { RegistrationRoutingModule } from './registration-routing.module';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

@NgModule({
  imports: [
    RegistrationRoutingModule
  ],
  declarations: [UserRegistrationComponent]
})
export class RegistrationModule {
}
