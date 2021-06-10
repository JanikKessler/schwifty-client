import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Artist, Artist_raw } from '../model/Artist_raw';
import { Album } from '../model/Album_raw';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {

  private _selectedArtist$: ReplaySubject<Artist>;
  private _selectedAlbum$: ReplaySubject<Album>;

  constructor() {
    this._selectedArtist$ = new ReplaySubject<Artist>(1);
    this._selectedAlbum$ = new ReplaySubject<Album>(1);
  }


  getSelectedArtist$(): ReplaySubject<Artist> {
    return this._selectedArtist$;
  }

  setSelectedArtist(artist: Artist) {
    this._selectedArtist$.next(artist);
  }

  getSelectedAlbum$(): ReplaySubject<Album> {
    return this._selectedAlbum$;
  }

  setSelectedAlbum$(album: Album) {
    this._selectedAlbum$.next(album);
  }
}
