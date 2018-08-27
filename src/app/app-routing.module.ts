import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from '@coder/users/user-home/user-home.component';
import { HomeComponent } from '@coder/home/home.component';

const routes: Routes = [
  {
    path: 'users',
    component: UserHomeComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '*',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
