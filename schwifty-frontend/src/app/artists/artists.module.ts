import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ArtistsRoutingModule} from './artists-routing.module';
import {ArtitsRouteComponent} from './artits-route/artits-route.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {
  ArtistTileRouteCompontentComponent
} from './artist-tile-route-compontent/artist-tile-route-compontent.component';
import {UiElementsModule} from '../common/ui-elements.module';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
    declarations: [ArtitsRouteComponent, ArtistTileRouteCompontentComponent],

    imports: [
        CommonModule,
        ArtistsRoutingModule,
        MatSidenavModule,
        UiElementsModule,
        MatCardModule,
        MatExpansionModule,
        MatDividerModule,
    ],
    exports: [
        ArtistTileRouteCompontentComponent
    ]
})
export class ArtistsModule { }
