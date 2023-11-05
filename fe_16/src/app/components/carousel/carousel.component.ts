import {Component, Input, TemplateRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarouselModule} from "primeng/carousel";
import {SharedModule} from "primeng/api";
import {CarouselModes} from "../../enums/CarouselModes";
import {ArtistTileComponent} from "../tiles/artist-tile/artist-tile.component";
import {AlbumTileComponent} from "../tiles/album-tile/album-tile.component";
import {Artist} from "../../model/artist";
import {Album} from "../../model/album";

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, CarouselModule, CommonModule, SharedModule, SharedModule, ArtistTileComponent, AlbumTileComponent],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  @Input({required:true}) items!: Artist[] | Album[];
  @Input({required:true}) templateRef!: TemplateRef<any>;
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];
}
