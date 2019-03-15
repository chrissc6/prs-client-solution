import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//home and about
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

//user
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'}, //1st route always

  //user
  {path: 'user/list', component: UserListComponent},
  {path: 'user/detail/:id', component: UserDetailComponent}, //id needed
  {path: 'user/create', component: UserCreateComponent},
  {path: 'user/edit/:id', component: UserEditComponent}, //id needed

  //home and about
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},

  {path: '**', component: HomeComponent} //last route always
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
