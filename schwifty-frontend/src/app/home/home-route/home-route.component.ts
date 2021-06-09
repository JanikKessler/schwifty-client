import { Component, HostListener, OnInit } from '@angular/core';
import { Song } from '../../model/Song';

@Component({
  selector: 'app-home-route',
  templateUrl: './home-route.component.html',
  styleUrls: ['./home-route.component.scss']
})
export class HomeRouteComponent implements OnInit {
  songs:Song[] = []
  innerScreenWidth: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  checkInnerWidth(){
    this.innerScreenWidth = innerWidth;
  }

}
