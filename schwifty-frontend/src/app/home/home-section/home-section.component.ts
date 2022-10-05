import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss']
})
export class HomeSectionComponent implements OnInit {
  @Input() sectionHeader: string | string [] = [];
  @Input() sectionSubHeader: string | null = null;
  @Input() withoutTopMargin: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
