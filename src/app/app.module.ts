import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatModule } from './shared/material/mat.module';
import { HomeModule } from '@coder/home/home.module';
import { UsersModule } from '@coder/users/users.module';
import { CoreModule } from '@coder/core/core.module';
import { RegistrationModule } from '@coder/registration/registration.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatModule,
    HomeModule,
    UsersModule,
    RegistrationModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
