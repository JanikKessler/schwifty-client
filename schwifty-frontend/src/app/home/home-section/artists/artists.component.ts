import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist, Artist_raw } from '../../../model/Artist_raw';
import { ArtistService } from '../../../services/artist.service';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';
import { ScreenSizeService } from '../../../services/screen-size.service';
import { SelectionService } from '../../../services/selection.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  allArtists$!: Observable<Artist[]>;
  @ViewChild('artistSlider', {read: DragScrollComponent}) artistSlider!: DragScrollComponent;
  positionLeftBound = true;
  positionRightBound = false;
  currentIndex: number = 0;
  nrOfIndexes: number = 0;
  innerScreenWidth:number = 0;

  constructor(private artistService: ArtistService, private selectionService:SelectionService) { }

  ngOnInit(): void {
    this.allArtists$ = this.artistService.getAllArtists();

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

  onArtistSelected(artist: Artist){
    this.selectionService.setSelectedArtist(artist)
  }
}
