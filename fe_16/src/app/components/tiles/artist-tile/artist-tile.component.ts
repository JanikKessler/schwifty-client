import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Artist} from "../../../model/artist";

@Component({
  selector: 'app-artist-tile',
  standalone: true,
    imports: [CommonModule, CommonModule],
  templateUrl: './artist-tile.component.html',
  styleUrls: ['./artist-tile.component.scss']
})
export class ArtistTileComponent {
  @Input() artist!: Artist;
  @Input() selected: boolean = false;

  ngOnInit(): void {
  }

  onArtistSelected(artist: Artist){
  }
}
