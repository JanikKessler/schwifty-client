import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ARTISTS_ROUTES} from './artists-routes';

@NgModule({
  imports: [RouterModule.forChild(ARTISTS_ROUTES)],
  exports: [RouterModule]
})
export class ArtistsRoutingModule { }
