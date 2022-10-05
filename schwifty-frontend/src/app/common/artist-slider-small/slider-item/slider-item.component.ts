import {Component, Input, OnInit} from '@angular/core';
import {Artist_raw} from '../../../model/Artist_raw';
import {Album} from '../../../model/Album';

@Component({
  selector: 'app-slider-item',
  templateUrl: './slider-item.component.html',
  styleUrls: ['./slider-item.component.scss'],
})
export class SliderItemComponent implements OnInit {
  @Input() contentItem: Artist_raw | Album | null = null;
  overlayHidden = true;

  constructor() {
  }

  ngOnInit(): void {

  }

  showOverlay() {
    this.overlayHidden = false;
  }

  hideOverlay() {
    this.overlayHidden = true;
  }
}
