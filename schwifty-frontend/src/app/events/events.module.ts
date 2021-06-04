import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsRouteComponent } from './events-route/events-route.component';
import { UiElementsModule } from '../common/ui-elements.module';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [EventsRouteComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    UiElementsModule,
    MatCardModule,
    MatDividerModule,
  ],
})
export class EventsModule { }
