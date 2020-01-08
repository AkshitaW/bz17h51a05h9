import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UsersComponent} from './users/users.component';
import {CountryComponent} from './country/country.component';
import {ColorsComponent} from './colors/colors.component'

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'users',component:UsersComponent},
  {path:'country',component:CountryComponent},
  {path:'colors',component:ColorsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
