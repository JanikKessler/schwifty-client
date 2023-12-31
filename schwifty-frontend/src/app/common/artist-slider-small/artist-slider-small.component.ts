import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {DragScrollComponent} from 'ngx-drag-scroll';
import {Artist_raw} from '../../model/Artist_raw';
import {Album} from '../../model/Album';

@Component({
  selector: 'app-artist-slider-small',
  templateUrl: './artist-slider-small.component.html',
  styleUrls: ['./artist-slider-small.component.scss']
})
export class ArtistSliderSmallComponent implements OnInit {
  @Input() sliderContent: Artist_raw[] | Album[] = []
  @Output() sliderItemSelected = new EventEmitter<Artist_raw | Album>();
  @ViewChild('artistSlider', {read: DragScrollComponent}) artistSlider!: DragScrollComponent;
  positionLeftBound = true;
  positionRightBound = false;

  constructor() { }

  ngOnInit() {
  }

  moveLeft() {
    this.artistSlider.moveLeft();
  }

  moveRight() {
    this.artistSlider.moveRight();
  }

  positionLeftBoundReached(leftBoundBool: boolean){
    this.positionLeftBound = leftBoundBool;
  }

  positionRightBoundReached(rightBoundBool: boolean){
    this.positionRightBound = rightBoundBool;
  }

  onSliderItemSelected(contentItem: Artist_raw | Album){
    this.sliderItemSelected.emit(contentItem)
  }
}
