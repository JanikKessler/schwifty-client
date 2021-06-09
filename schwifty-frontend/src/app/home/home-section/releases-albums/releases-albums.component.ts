import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { Artist } from '../../../model/Artist';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { ArtistService } from '../../../services/artist.service';
import { AlbumService } from '../../../services/album.service';
import { Album, Album_raw } from '../../../model/Album_raw';
import { AlbumEntry } from './model/AlbumEntry';
import { SelectionService } from '../../../services/selection.service';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-releases-albums',
  templateUrl: './releases-albums.component.html',
  styleUrls: ['./releases-albums.component.scss']
})
export class ReleasesAlbumsComponent implements OnInit {
  allAlbums$!: Observable<Album[]>;
  filteredAlbums: Album[] = [];
  @ViewChild('artistSlider', {read: DragScrollComponent}) artistSlider!: DragScrollComponent;
  positionLeftBound = true;
  positionRightBound = false;
  currentIndex: number = 0;
  nrOfIndexes: number = 0;
  innerScreenWidth:number = 0;

  constructor(private albumService: AlbumService, private selectionService: SelectionService) {}

  ngOnInit(): void {
    this.albumService.getAllAllbums().subscribe(albums => this.filteredAlbums = albums)
    combineLatest([this.albumService.getAllAllbums(),this.selectionService.getSelectedArtist$()]).pipe(
     map(([albums, artist]) => albums.filter(album => album.artist === artist))
    ).subscribe(albums => this.filteredAlbums = albums)
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
  @HostListener('window:load', ['$event'])
  checkInnerWidth(){
    this.innerScreenWidth = innerWidth;
  }

  onAlbumSelected(album: Album){
    this.selectionService.setSelectedAlbum$(album)
  }
}
