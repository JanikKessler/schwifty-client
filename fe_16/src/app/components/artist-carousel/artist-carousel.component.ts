import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AlbumTileComponent} from "../tiles/album-tile/album-tile.component";
import {CarouselComponent} from "../carousel/carousel.component";
import {Connector} from "../../services/data-sources/Connector";
import {ArtistTileComponent} from "../tiles/artist-tile/artist-tile.component";
import {SelectionService} from "../../services/selection.service";
import {Artist} from "../../model/artist";

@Component({
  selector: 'app-artist-carousel',
  standalone: true,
  imports: [CommonModule, AlbumTileComponent, CarouselComponent, ArtistTileComponent],
  templateUrl: './artist-carousel.component.html',
  styleUrls: ['./artist-carousel.component.scss']
})
export class ArtistCarouselComponent {
  selectionService = inject(SelectionService);
  selectedArtistSignal = this.selectionService.getSelectedArtistSignal();
  artistData$ = inject(Connector).getAllArtists();

  onArtistSelected(artist: Artist) {
    this.selectionService.setSelectedArtist(artist);
  }
}
