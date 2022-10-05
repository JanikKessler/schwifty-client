import {Component, Input, OnInit} from '@angular/core';
import {Album} from '../../../../model/Album';

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
