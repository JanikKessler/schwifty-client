import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SectionComponent} from "../../components/section/section.component";
import {CarouselComponent} from "../../components/carousel/carousel.component";
import {ArtistTileComponent} from "../../components/tiles/artist-tile/artist-tile.component";
import {AlbumTileComponent} from "../../components/tiles/album-tile/album-tile.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SectionComponent, CarouselComponent, ArtistTileComponent, AlbumTileComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
