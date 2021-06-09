import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { Artist } from '../../../model/Artist';
import { Album } from '../../../model/Album';

@Component({
  selector: 'app-slider-item',
  templateUrl: './slider-item.component.html',
  styleUrls: ['./slider-item.component.scss'],
})
export class SliderItemComponent implements OnInit {
  @Input() contentItem: Artist | Album | null = null;
  overlayHidden = true;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.contentItem)
  }

  showOverlay() {
    this.overlayHidden = false;
  }

  hideOverlay() {
    this.overlayHidden = true;
  }
}
