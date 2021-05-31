import { Component, Input, OnInit } from '@angular/core';
import { Artist } from '../../model/Artist';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  @Input() artist!: Artist;
  constructor() { }

  ngOnInit(): void {
  }

}
