import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Song, Song_raw } from '../model/Song_raw';
import { ArtistService } from './artist.service';
import { AlbumService } from './album.service';
import { LinkType } from '../enums/LinkType';
import { ExternalLink } from '../model/Links';
import link_list from '../../assets/data/links.json';
import song_list from '../../assets/data/songs.json';
import { SchwiftOtw } from '../model/SchwiftOtw';


@Injectable({
  providedIn: 'root',
})
export class SongService {
  private allSongsForTable$ = new ReplaySubject<Song[]>(1);
  private songList: Song[] = [];

  constructor(private artistService: ArtistService, private albumService: AlbumService) {
    const linkList: ExternalLink[] = link_list;
    this.songList = song_list.map((song: Song_raw): Song => {
      const songLinks: ExternalLink[] = linkList.filter(link => link.link_type === LinkType.SOUNDCLOUD_SONG);
      return {
        id: song.id,
        artist: this.artistService.getArtistById(song.artistID),
        album: this.albumService.getAlbumById(song.albumID),
        cover: song.cover,
        name: song.song,
        link: song.link,
        duration: song.duration,
        soundcloudLink: songLinks.find(link => link.songID === song.id),

      };
    });
    this.allSongsForTable$.next(this.songList);
  }

  getAllSongsForTable(): Observable<Song[]> {
    return this.allSongsForTable$;
  }

  getSongById(songId: number): Song | undefined {
    return this.songList.find(song => song.id === songId)
  }
}
