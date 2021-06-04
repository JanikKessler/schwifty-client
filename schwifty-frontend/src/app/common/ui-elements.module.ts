import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileComponent } from './tile/tile.component';
import { MatCardModule } from '@angular/material/card';
import { ArtistSliderSmallComponent } from './artist-slider-small/artist-slider-small.component';
import { MatIconModule } from '@angular/material/icon';
import { DragScrollModule } from 'ngx-drag-scroll';
import { SliderItemComponent } from './artist-slider-small/slider-item/slider-item.component';


@NgModule({
  declarations: [TileComponent, ArtistSliderSmallComponent, SliderItemComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    DragScrollModule,
  ],
  exports: [TileComponent, ArtistSliderSmallComponent],
})
export class UiElementsModule {
}
