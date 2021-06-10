import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Song, Song_raw } from '../model/Song_raw';
// @ts-ignore
import song_list from '../../assets/data/songs.json';
import { Album, Album_raw } from '../model/Album_raw';
import album_list from '../../assets/data/albums.json';
import { Artist_raw } from '../model/Artist_raw';
import artist_list from '../../assets/data/artists.json';
import { ArtistService } from './artist.service';
import { AlbumService } from './album.service';

@Injectable({
  providedIn: 'root',
})
export class SongService {
  private allSongsForTable$ = new ReplaySubject<Song[]>(1);

  constructor(private artistService: ArtistService, private albumService: AlbumService) {
    const album_raw: Album_raw[] = album_list;
    const artists_raw: Artist_raw[] = artist_list;
    const song_raw: Song_raw[] = song_list;
    let songList: Song[] = song_list.map((song: Song_raw): Song => {
      return {
        id: song.id,
        artist: this.artistService.getArtistById(song.artistID),
        album: this.albumService.getAlbumById(song.albumID),
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
