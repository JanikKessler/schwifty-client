import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {combineLatest, Observable, ReplaySubject} from 'rxjs';
import {DragScrollComponent} from 'ngx-drag-scroll';
import {AlbumService} from '../../../services/album.service';
import {Album} from '../../../model/Album';
import {SelectionService} from '../../../services/selection.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-releases-albums',
  templateUrl: './releases-albums.component.html',
  styleUrls: ['./releases-albums.component.scss']
})
export class ReleasesAlbumsComponent implements OnInit {
  selectedAlbum$: Observable<Album> = new  Observable<Album>();
  filteredAlbums$: ReplaySubject<Album[]> = new ReplaySubject<Album[]>(1);
  @ViewChild('artistSlider', {read: DragScrollComponent}) artistSlider!: DragScrollComponent;
  positionLeftBound = true;
  positionRightBound = false;
  currentIndex: number = 0;
  nrOfIndexes: number = 0;
  innerScreenWidth:number = 0;

  constructor(private albumService: AlbumService, private selectionService: SelectionService) {}

  ngOnInit(): void {
    this.selectedAlbum$ = this.selectionService.getSelectedAlbum$();
    this.albumService.getAllAllbums().subscribe(albums => this.filteredAlbums$.next(albums))
    combineLatest([this.albumService.getAllAllbums(),this.selectionService.getSelectedArtist$()]).pipe(
     map(([albums, artist]) => {
       const filteredAlbums = albums
           .filter(album => {
             return album.artist.artistID === artist.artistID
           })

       filteredAlbums.unshift({
         albumID: undefined,
         name: 'Alle Songs',
         cover: artist.cover,
         artist: artist
       })

       return filteredAlbums
     })
    ).subscribe(albums => this.filteredAlbums$.next(albums))
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
