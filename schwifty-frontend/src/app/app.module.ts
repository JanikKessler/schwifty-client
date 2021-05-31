import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeModule } from './home/home.module';
import { ArtistsModule } from './artists/artists.module';
import { ReleasesModule } from './releases/releases.module';
import { EventsModule } from './events/events.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavigationModule } from './navigation/navigation.module';
import { APP_ROUTES } from './app-routes';
import { RouterModule } from '@angular/router';
import { DragScrollModule } from 'ngx-drag-scroll';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    HomeModule,
    ArtistsModule,
    ReleasesModule,
    EventsModule,
    NavigationModule,
    AppRoutingModule,
    RouterModule.forRoot(APP_ROUTES),
    BrowserAnimationsModule,
    DragScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
