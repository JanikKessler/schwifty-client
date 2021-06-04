import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable, Subject } from 'rxjs';
import { Artist } from '../../model/Artist';
import { Album } from '../../model/Album';
import { AlbumService } from '../../services/album.service';
import { ArtistService } from '../../services/artist.service';
import { map } from 'rxjs/operators';
import { newArray } from '@angular/compiler/src/util';
import { ActivatedRoute, Params } from '@angular/router';
import { ARTIST_MAP } from '../../data/artist.data';

@Component({
  selector: 'app-releases-route',
  templateUrl: './releases-route.component.html',
  styleUrls: ['./releases-route.component.scss'],
})
export class ReleasesRouteComponent implements OnInit {
  allArtists: Artist[] = [];
  filteredArtists: Artist[] = [];
  currentlySelectedArtist: Artist | undefined;

  constructor(private artistService: ArtistService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.currentlySelectedArtist = ARTIST_MAP.get(params['artist'])!

      console.log(this.currentlySelectedArtist)
    });

    this.artistService.getAllArtists().subscribe(artists => {
      this.allArtists = artists;
      if (this.currentlySelectedArtist) {
        this.filteredArtists = artists.filter(artist => artist === this.currentlySelectedArtist);
      } else {
        this.filteredArtists = artists;
      }
    });
  }

  filterArtists(filteredArtist : Artist){
    this.filteredArtists = this.allArtists.filter(artist => artist === filteredArtist )
  }
}
