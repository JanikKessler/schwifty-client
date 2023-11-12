import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Connector} from "../../services/data-sources/Connector";
import {CarouselModes} from "../../enums/CarouselModes";
import {AlbumTileComponent} from "../tiles/album-tile/album-tile.component";
import {ArtistTileComponent} from "../tiles/artist-tile/artist-tile.component";
import {CarouselModule} from "primeng/carousel";
import {SharedModule} from "primeng/api";
import {CarouselComponent} from "../carousel/carousel.component";
import {Artist} from "../../model/artist";
import {SelectionService} from "../../services/selection.service";
import {Album} from "../../model/album";

@Component({
  selector: 'app-album-carousel',
  standalone: true,
  imports: [CommonModule, AlbumTileComponent, ArtistTileComponent, CarouselModule, SharedModule, CarouselComponent],
  templateUrl: './album-carousel.component.html',
  styleUrls: ['./album-carousel.component.scss']
})
export class AlbumCarouselComponent {
  selectionService = inject(SelectionService);
  selectedArtistSignal = this.selectionService.getSelectedArtistSignal();
  allAlbums$ = inject(Connector).getAllAlbums();

  onAlbumSelected(album: Album) {
    this.selectionService.setSelectedAlbum(album);
  }
}
