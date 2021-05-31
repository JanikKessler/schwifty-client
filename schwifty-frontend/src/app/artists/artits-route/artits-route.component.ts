import { Component, OnInit } from '@angular/core';
import { Artist } from '../../model/Artist';
import { ARTISTS_ROUTES } from '../artists-routes';
import { ARTIST_DATA } from '../../data/artist.data';
import { Observable } from 'rxjs';
import { ArtistService } from '../../services/artist.service';

@Component({
  selector: 'app-artits-route',
  templateUrl: './artits-route.component.html',
  styleUrls: ['./artits-route.component.scss']
})
export class ArtitsRouteComponent implements OnInit {
  artists$!: Observable<Artist[]>;

  constructor(private artistService: ArtistService) { }

  ngOnInit(): void {
    this.artists$ = this.artistService.getAllArtists();
    this.artists$.subscribe(artist => console.log(artist))
  }

}
