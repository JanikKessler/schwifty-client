import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-artist-tile',
  standalone: true,
    imports: [CommonModule, CommonModule],
  templateUrl: './artist-tile.component.html',
  styleUrls: ['./artist-tile.component.scss']
})
export class ArtistTileComponent {
  @Input() artist!: any;
  @Input() selected: boolean = false;

  ngOnInit(): void {
  }

  onArtistSelected(artist: any){
  }
}
