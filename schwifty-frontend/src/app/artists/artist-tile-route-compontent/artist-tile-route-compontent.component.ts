import { Component, Input, OnInit } from '@angular/core';
import { Artist } from '../../model/Artist';

@Component({
  selector: 'app-artist-tile-route-compontent',
  templateUrl: './artist-tile-route-compontent.component.html',
  styleUrls: ['./artist-tile-route-compontent.component.scss']
})
export class ArtistTileRouteCompontentComponent implements OnInit {
  @Input() artist!: Artist;
  constructor() { }

  ngOnInit(): void {
  }

}
