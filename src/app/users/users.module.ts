import { NgModule } from '@angular/core';
import { MatModule } from '@coder/shared/material/mat.module';
import { UserHomeComponent } from './user-home/user-home.component';
import { CoreModule } from '@coder/core/core.module';
import { UsersRoutingModule } from '@coder/users/users-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  imports: [
    MatModule,
    CoreModule,
    UsersRoutingModule
  ],
  declarations: [
    UserHomeComponent,
    UserProfileComponent
  ]
})
export class UsersModule {
}
