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
import{LoginComponent} from './user/login/login.component';

//vendor
import{VendorListComponent} from './vendor/vendor-list/vendor-list.component';
import{VendorDetailComponent} from './vendor/vendor-detail/vendor-detail.component';
import{VendorCreateComponent} from './vendor/vendor-create/vendor-create.component';
import{VendorEditComponent} from './vendor/vendor-edit/vendor-edit.component';

//product
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'}, //1st route always

  //user
  {path: 'user/list', component: UserListComponent},
  {path: 'user/detail/:id', component: UserDetailComponent}, //id needed
  {path: 'user/create', component: UserCreateComponent},
  {path: 'user/edit/:id', component: UserEditComponent}, //id needed
  {path: 'login', component: LoginComponent},

  //vendor
  {path: 'vendor/list', component: VendorListComponent},
  {path: 'vendor/detail/:id', component: VendorDetailComponent},
  {path: 'vendor/create', component: VendorCreateComponent},
  {path: 'vendor/edit/:id', component: VendorEditComponent},

  //product
  {path: 'product/list', component: ProductListComponent},
  {path: 'product/detail/:id', component: ProductDetailComponent},
  {path: 'product/create', component: ProductCreateComponent},
  {path: 'product/edit/:id', component: ProductEditComponent},

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
