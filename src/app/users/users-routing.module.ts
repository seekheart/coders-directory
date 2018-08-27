import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from '@coder/users/user-home/user-home.component';

const routes: Routes = [
  {
    path: 'users',
    component: UserHomeComponent,
    children: [
      {
        path: ':id',
        component: UserHomeComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
