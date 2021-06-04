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
  }

  showOverlay() {
    this.overlayHidden = false;
    console.log(this.overlayHidden)
  }

  hideOverlay() {
    this.overlayHidden = true;
    console.log(this.overlayHidden)
  }
}
