import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../../../../model/Album';
import { Artist } from '../../../../model/Artist';
import { AlbumEntry } from '../model/AlbumEntry';

@Component({
  selector: 'app-album-tile',
  templateUrl: './album-tile.component.html',
  styleUrls: ['./album-tile.component.scss']
})
export class AlbumTileComponent implements OnInit {
  @Input() album!: AlbumEntry;

  constructor() { }

  ngOnInit(): void {
    console.log(this.album.artist)
  }

}
