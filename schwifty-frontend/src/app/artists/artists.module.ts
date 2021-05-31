import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistsRoutingModule } from './artists-routing.module';
import { ArtitsRouteComponent } from './artits-route/artits-route.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ArtistTileRouteCompontentComponent } from './artist-tile-route-compontent/artist-tile-route-compontent.component';
import { UiElementsModule } from '../common/ui-elements.module';


@NgModule({
  declarations: [ArtitsRouteComponent, ArtistTileRouteCompontentComponent],

  imports: [
    CommonModule,
    ArtistsRoutingModule,
    MatSidenavModule,
    UiElementsModule
  ],
})
export class ArtistsModule { }
