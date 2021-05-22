import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReleasesRoutingModule } from './releases-routing.module';
import { ReleasesRouteComponent } from './releases-route/releases-route.component';


@NgModule({
  declarations: [ReleasesRouteComponent],
  imports: [
    CommonModule,
    ReleasesRoutingModule
  ]
})
export class ReleasesModule { }
