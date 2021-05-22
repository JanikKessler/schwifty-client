import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RELEASES_ROUTES } from './releases-routes';

@NgModule({
  imports: [RouterModule.forChild(RELEASES_ROUTES)],
  exports: [RouterModule]
})
export class ReleasesRoutingModule { }
