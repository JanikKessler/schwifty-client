import { Component, Input, OnInit } from '@angular/core';
import { Artist } from '../../../../model/Artist';
import { Album } from '../../../../model/Album';

@Component({
  selector: 'app-artist-tile',
  templateUrl: './artist-tile.component.html',
  styleUrls: ['./artist-tile.component.scss']
})
export class ArtistTileComponent implements OnInit {
  @Input() artist!: Artist;
  constructor() { }

  ngOnInit(): void {
  }

}
