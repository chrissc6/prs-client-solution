import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//user
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'}, //1st route always
  {path: 'users/list', component: UserListComponent},
  {path: 'users/detail/:id', component: UserDetailComponent}, //id needed
  {path: 'users/create', component: UserCreateComponent},
  {path: 'users/edit/:id', component: UserEditComponent}, //id needed
  {path: '**', component: HomeComponent} //last route always
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
