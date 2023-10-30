import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {Artist} from '../../../model/Artist_raw';
import {ArtistService} from '../../../services/artist.service';
import {DragScrollComponent} from 'ngx-drag-scroll';
import {SelectionService} from '../../../services/selection.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  allArtists$!: Observable<Artist[]>;
  selectedArtist$: Observable<Artist> = new Observable<Artist>();
  positionLeftBound = true;
  positionRightBound = false;
  currentIndex: number = 0;
  nrOfIndexes: number = 0;
  innerScreenWidth:number = 0;
  responsiveOptions = [];

  constructor(private artistService: ArtistService, private selectionService:SelectionService) { }

  ngOnInit(): void {
    this.allArtists$ = this.artistService.getAllArtists();
    this.selectedArtist$ = this.artistService.getSelectedArtist();
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  // moveLeft() {
  //   this.artistSlider.moveLeft();
  // }
  //
  // moveRight() {
  //   this.artistSlider.moveRight();
  // }

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

  onArtistSelected(artist: Artist){
    this.selectionService.setSelectedArtist(artist)
  }
}
