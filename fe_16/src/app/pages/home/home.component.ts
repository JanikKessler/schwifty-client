import {Component, effect, inject, OnInit, Signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SectionComponent} from "../../components/section/section.component";
import {CarouselComponent} from "../../components/carousel/carousel.component";
import {ArtistTileComponent} from "../../components/tiles/artist-tile/artist-tile.component";
import {AlbumTileComponent} from "../../components/tiles/album-tile/album-tile.component";
import {StrapiService} from "../../services/data-sources/strapi/strapi.service";
import {Artist} from "../../model/artist";
import {Connector} from "../../services/data-sources/Connector";
import {ArtistCarouselComponent} from "../../components/artist-carousel/artist-carousel.component";
import {AlbumCarouselComponent} from "../../components/album-carousel/album-carousel.component";
import {SongsTableComponent} from "../../components/songs-table/songs-table.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SectionComponent, CarouselComponent, ArtistTileComponent, AlbumTileComponent, ArtistCarouselComponent, AlbumCarouselComponent, SongsTableComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 private cmsConnector = inject(Connector);

  ngOnInit(): void {
    this.cmsConnector.loadCmsData();
  }
}
