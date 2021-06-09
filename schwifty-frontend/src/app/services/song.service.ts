import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Song } from '../model/Song';
// @ts-ignore
import song_list from '../../assets/data/songs.json';

@Injectable({
  providedIn: 'root',
})
export class SongService {
  private allSongsForTable$ = new ReplaySubject<Song[]>(1);

  constructor() {
    this.allSongsForTable$.next(song_list);
    console.log(song_list)
  }

  getAllSongsForTable(): Observable<Song[]> {
    return this.allSongsForTable$;
  }
}
