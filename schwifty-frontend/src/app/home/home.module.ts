import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeRouteComponent } from './home-route/home-route.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { SchwiftOtwComponent } from './home-section/schwift-otw/schwift-otw.component';
import { ArtistsComponent } from './home-section/artists/artists.component';
import { ReleasesAlbumsComponent } from './home-section/releases-albums/releases-albums.component';
import { ReleasesSongsComponent } from './home-section/releases-songs/releases-songs.component';
import { ArtistTileComponent } from './home-section/artists/artist-tile/artist-tile.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { MatIconModule } from '@angular/material/icon';
import { AlbumTileComponent } from './home-section/releases-albums/album-tile/album-tile.component';


@NgModule({
  declarations: [HomeRouteComponent, HomeSectionComponent, SchwiftOtwComponent, ArtistsComponent, ReleasesAlbumsComponent, ReleasesSongsComponent, ArtistTileComponent, AlbumTileComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DragScrollModule,
    MatIconModule
  ],
})
export class HomeModule { }
