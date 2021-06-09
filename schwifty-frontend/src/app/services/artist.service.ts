import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Artist } from '../model/Artist';
import artist_list from '../../assets/data/artists.json';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  artists$ = new ReplaySubject<Artist[]>(1);
  currentlySelectedArtist$ = new ReplaySubject<Artist>(1);

  constructor() {
    this.artists$.next(artist_list);
  }

  getAllArtists(): Observable<Artist[]>{
    return this.artists$
  }

  setSelectedArtist(selectedArtist: Artist){
    this.currentlySelectedArtist$.next(selectedArtist)
  }

  getSelectedArtist(): Observable<Artist>{
    return this.currentlySelectedArtist$;

  }
}
