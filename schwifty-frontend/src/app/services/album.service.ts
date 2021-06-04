import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { ARTIST_DATA } from '../data/artist.data';
import { Album } from '../model/Album';
import { AlbumEntry } from '../home/home-section/releases-albums/model/AlbumEntry';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private allAlbums$ = new ReplaySubject<AlbumEntry[]>(1)

  constructor() {

    this.allAlbums$.next(ARTIST_DATA
      .map(artist => artist.albums?.map(album => {
        return {artist: artist, ...album}
      }))
      .reduce((albumsPrev, albumsNext) => albumsPrev!.concat(albumsNext!)))
  }

  getAllAllbums(): Observable<AlbumEntry[]>{
    return this.allAlbums$
  }
}
