import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from '../../../model/Artist';
import { ArtistService } from '../../../services/artist.service';
import { DragScrollComponent } from 'ngx-drag-scroll';

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

  constructor(private artistService: ArtistService) { }

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
}
