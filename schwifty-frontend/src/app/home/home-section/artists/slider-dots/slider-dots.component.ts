import {AfterViewInit, Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-slider-dots',
  templateUrl: './slider-dots.component.html',
  styleUrls: ['./slider-dots.component.scss']
})
export class SliderDotsComponent implements OnChanges, AfterViewInit {
  @Input() currentIndex = 0;
  @Input() marginTop = 0;
  @Input() maxIndexes: number = 1
  indexes: number[] = []
  constructor() { }

  ngOnChanges() {
    this.indexes = new Array(this.maxIndexes)
  }

  ngAfterViewInit() {
    console.log(this.maxIndexes)
    this.indexes = new Array(this.maxIndexes)
  }

}
