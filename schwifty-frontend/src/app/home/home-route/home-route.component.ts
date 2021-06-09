import { Component, HostListener, OnInit } from '@angular/core';
import { Song_raw } from '../../model/Song_raw';

@Component({
  selector: 'app-home-route',
  templateUrl: './home-route.component.html',
  styleUrls: ['./home-route.component.scss']
})
export class HomeRouteComponent implements OnInit {
  songs:Song_raw[] = []
  innerScreenWidth: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  checkInnerWidth(){
    this.innerScreenWidth = innerWidth;
  }

}
