import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistsRoutingModule } from './artists-routing.module';
import { ArtitsRouteComponent } from './artits-route/artits-route.component';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [ArtitsRouteComponent],
  imports: [
    CommonModule,
    ArtistsRoutingModule,
    MatSidenavModule
  ]
})
export class ArtistsModule { }
