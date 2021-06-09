import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Song, Song_raw } from '../model/Song_raw';
// @ts-ignore
import song_list from '../../assets/data/songs.json';
import { Album, Album_raw } from '../model/Album_raw';
import album_list from '../../assets/data/albums.json';
import { Artist } from '../model/Artist';
import artist_list from '../../assets/data/artists.json';

@Injectable({
  providedIn: 'root',
})
export class SongService {
  private allSongsForTable$ = new ReplaySubject<Song[]>(1);

  constructor() {
    const album_raw: Album_raw[] = album_list;
    const artists_raw: Artist[] = artist_list;
    const song_raw: Song_raw[] = song_list;
    let songList: Song[] = song_list.map((song: Song_raw): Song => {
      return {
        artist: artists_raw.find(artist => artist.artist === song.artist)!,
        album: album_raw.find(album => album.album === song.album)!,
        song: song.song,
        link: song.link,
        duration: song.duration

      };
    });
    this.allSongsForTable$.next(songList);
  }

  getAllSongsForTable(): Observable<Song[]> {
    return this.allSongsForTable$;
  }
}
