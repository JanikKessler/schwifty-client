import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Song, Song_raw } from '../model/Song_raw';
import { ArtistService } from './artist.service';
import { AlbumService } from './album.service';
import { LinkType } from '../enums/LinkType';
import { ExternalLink } from '../model/Links';
import link_list from '../../assets/data/links.json';
import song_list from '../../assets/data/songs.json';


@Injectable({
  providedIn: 'root',
})
export class SongService {
  private allSongsForTable$ = new ReplaySubject<Song[]>(1);

  constructor(private artistService: ArtistService, private albumService: AlbumService) {
    const linkList: ExternalLink[] = link_list;
    let songList: Song[] = song_list.map((song: Song_raw): Song => {
      const songLinks: ExternalLink[] = linkList.filter(link => link.artistID === song.artistID);
      return {
        id: song.id,
        artist: this.artistService.getArtistById(song.artistID),
        album: this.albumService.getAlbumById(song.albumID),
        song: song.song,
        link: song.link,
        duration: song.duration,
        soundcloudSong: songLinks.find(link => link.link_type === LinkType.SOUNDCLOUD_SONG),

      };
    });
    this.allSongsForTable$.next(songList);
  }

  getAllSongsForTable(): Observable<Song[]> {
    return this.allSongsForTable$;
  }
}
