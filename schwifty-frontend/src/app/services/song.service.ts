import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { Album } from '../model/Album';
import { ARTIST_DATA } from '../data/artist.data';
import { map, tap } from 'rxjs/operators';
import { Song } from '../model/Song';
import { SongTableEntry } from '../home/home-section/releases-songs/model/song-table-entry';
import { entryPointKeyFor } from '@angular/compiler-cli/src/ngtsc/routing';

@Injectable({
  providedIn: 'root',
})
export class SongService {
  private allSongsForTable$ = new ReplaySubject<SongTableEntry[]>(1);

  constructor() {

    let songArray: SongTableEntry[] = [];

    ARTIST_DATA.forEach( artist => {
      artist.albums?.forEach( album => {
        album.songs.forEach( song => {
          songArray.push({
            ...song,
            artist: artist,
            album: album,
          })
        })
      })
    })

    this.allSongsForTable$.next(songArray);

  }

  getAllSongsForTable(): Observable<SongTableEntry[]> {
    return this.allSongsForTable$;
  }
}
