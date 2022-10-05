import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {ArtistSliderSmallComponent} from './artist-slider-small/artist-slider-small.component';
import {MatIconModule} from '@angular/material/icon';
import {DragScrollModule} from 'ngx-drag-scroll';
import {SliderItemComponent} from './artist-slider-small/slider-item/slider-item.component';


@NgModule({
  declarations: [ArtistSliderSmallComponent, SliderItemComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    DragScrollModule,
  ],
  exports: [ArtistSliderSmallComponent],
})
export class UiElementsModule {
}
