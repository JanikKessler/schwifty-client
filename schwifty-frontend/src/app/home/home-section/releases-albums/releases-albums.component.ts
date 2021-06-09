import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from '../../../model/Artist';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { ArtistService } from '../../../services/artist.service';
import { AlbumService } from '../../../services/album.service';
import { Album } from '../../../model/Album';
import { AlbumEntry } from './model/AlbumEntry';

@Component({
  selector: 'app-releases-albums',
  templateUrl: './releases-albums.component.html',
  styleUrls: ['./releases-albums.component.scss']
})
export class ReleasesAlbumsComponent implements OnInit {
  allAlbums$!: Observable<AlbumEntry[]>;
  @ViewChild('artistSlider', {read: DragScrollComponent}) artistSlider!: DragScrollComponent;
  positionLeftBound = true;
  positionRightBound = false;
  currentIndex: number = 0;
  nrOfIndexes: number = 0;
  innerScreenWidth:number = 0;

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.allAlbums$ = this.albumService.getAllAllbums();
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

  saveIndex(index: number){
    this.currentIndex = index;
  }

  @HostListener('window:resize', ['$event'])
  checkInnerWidth(){
    this.innerScreenWidth = innerWidth;
  }
}
