import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { Artist } from '../../model/Artist';
import { Album_raw } from '../../model/Album_raw';

@Component({
  selector: 'app-artist-slider-small',
  templateUrl: './artist-slider-small.component.html',
  styleUrls: ['./artist-slider-small.component.scss']
})
export class ArtistSliderSmallComponent implements OnInit {
  @Input() sliderContent: Artist[] | Album_raw[] = []
  @Output() sliderItemSelected = new EventEmitter<Artist | Album_raw>();
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

  onSliderItemSelected(contentItem: Artist | Album_raw){
    this.sliderItemSelected.emit(contentItem)
  }
}
