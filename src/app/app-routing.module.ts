import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './home/home.component';
import { DatalistComponent } from './datalist/datalist.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "datalist", component: DatalistComponent},
  {path: "", redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
