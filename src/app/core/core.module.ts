import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '@coder/core/user.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations: [
    UserService
  ]
})
export class CoreModule {
}
