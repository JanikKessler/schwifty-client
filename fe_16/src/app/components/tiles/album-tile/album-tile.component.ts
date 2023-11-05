import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Album} from "../../../model/album";

@Component({
  selector: 'app-album-tile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-tile.component.html',
  styleUrls: ['./album-tile.component.scss']
})
export class AlbumTileComponent {
  @Input() album!: Album;
  @Input() selected: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }
}
