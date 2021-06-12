import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-dots',
  templateUrl: './slider-dots.component.html',
  styleUrls: ['./slider-dots.component.scss']
})
export class SliderDotsComponent implements OnInit, AfterViewInit {
  @Input() currentIndex = 0;
  @Input() maxIndexes: number = 3
  indexes: number[] = []
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.indexes = new Array(this.maxIndexes)
  }

}
