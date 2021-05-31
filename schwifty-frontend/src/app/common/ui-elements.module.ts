import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileComponent } from './tile/tile.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [TileComponent],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports:[TileComponent]
})
export class UiElementsModule {
}
