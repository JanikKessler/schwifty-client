import { Component, Input, OnInit } from '@angular/core';
import { Artist } from './model/Artist';
import { ARTIST_DATA } from './data/artist.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  @Input() artists: Artist[] = [];


  constructor() {
  }

  ngOnInit(){
    this.artists = ARTIST_DATA.filter(artist => artist.mitglieder.length > 1);
  }
}
