import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from '@coder/users/user-home/user-home.component';
import { UserProfileComponent } from '@coder/users/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: 'users',
    component: UserHomeComponent,
  },
  {
    path: 'users/:id',
    component: UserProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
