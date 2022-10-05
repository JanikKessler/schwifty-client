import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {EVENTS_ROUTES} from './events-routes';

@NgModule({
  imports: [RouterModule.forChild(EVENTS_ROUTES)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
