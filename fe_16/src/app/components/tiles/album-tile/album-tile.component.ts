import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-tile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-tile.component.html',
  styleUrls: ['./album-tile.component.scss']
})
export class AlbumTileComponent {
  @Input() album!: any;
  @Input() selected: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }
}
