import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HOME_ROUTES } from './home-routes';

@NgModule({
  imports: [RouterModule.forChild(HOME_ROUTES)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
