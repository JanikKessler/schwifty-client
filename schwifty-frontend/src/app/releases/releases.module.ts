import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReleasesRoutingModule} from './releases-routing.module';
import {ReleasesRouteComponent} from './releases-route/releases-route.component';
import {UiElementsModule} from '../common/ui-elements.module';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [ReleasesRouteComponent],
  imports: [
    CommonModule,
    ReleasesRoutingModule,
    UiElementsModule,
    MatCardModule,
  ],
})
export class ReleasesModule { }
