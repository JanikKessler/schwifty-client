import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Artist } from '../model/Artist';
import { ARTIST_DATA } from '../data/artist.data';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  artists$ = new ReplaySubject<Artist[]>(1)

  constructor() {
    this.artists$.next(ARTIST_DATA)
  }

  getAllArtists(): Observable<Artist[]>{
    return this.artists$
  }
}
