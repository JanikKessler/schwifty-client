import { Component, Input, OnInit } from '@angular/core';
import { Album, Album_raw } from '../../../../model/Album_raw';
import { Artist_raw } from '../../../../model/Artist_raw';
import { AlbumEntry } from '../model/AlbumEntry';

@Component({
  selector: 'app-album-tile',
  templateUrl: './album-tile.component.html',
  styleUrls: ['./album-tile.component.scss']
})
export class AlbumTileComponent implements OnInit {
  @Input() album!: Album;
  @Input() selected: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

}
