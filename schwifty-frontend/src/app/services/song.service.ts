import {Injectable} from '@angular/core';
import {combineLatest, Observable, ReplaySubject} from 'rxjs';
import {Song, Song_raw} from '../model/Song_raw';
import {ArtistService} from './artist.service';
import {AlbumService} from './album.service';
import {LinkType} from '../enums/LinkType';
import {ExternalLink} from '../model/Links';
import link_list from '../../assets/data/links.json';
import song_list from '../../assets/data/songs.json';
import {AirtableAlbum} from "../model/AirtableAlbum";
import {AirtableLink} from "../model/AirtableLink";
import {Artist} from "../model/Artist_raw";
import {AirtableSong} from "../model/AirtableSong";
import {Album} from "../model/Album";
import {map} from "rxjs/operators";
import {AirtableService} from "./airtable.service";


@Injectable({
  providedIn: 'root',
})
export class SongService {
  private airtableSongs$ = new Observable<AirtableSong[]>()
  private albums$ = new Observable<Album[]>();
  private airtableLinks$ = new Observable<AirtableLink[]>();
  private artists$ = new Observable<Artist[]>();
  private allSongs$ = new Observable<Song[]>()

  constructor(private airtableService: AirtableService, private artistService: ArtistService, private albumService: AlbumService) {
    this.airtableSongs$ = this.airtableService.getAllSongs()
    this.airtableLinks$ = this.airtableService.getAllLinks();
    this.albums$ = this.albumService.getAllAllbums();
    this.artists$ = this.artistService.getAllArtists();

    console.log('loaded')

    this.airtableSongs$.subscribe(x => console.log(x))

    this.allSongs$ = combineLatest(
      this.airtableSongs$,
      this.albums$,
      this.artists$)
      .pipe(
        map(([
               songArray, albumArray, artistArray]) => {
          console.log('songList', songArray)
          return songArray.map(song => {
            const album = song.album ? albumArray.find(al => al.albumID === song.album[0]) : undefined
            const artist = artistArray.find(a => a.artistID === song.artist[0])
            return {
              id: song.id,
              artist: artist,
              album: album,
              cover: song.cover ? song.cover[0].url : undefined,
              name: song.name,
              duration: song.duration
            };
          })
        }));
  }

  getAllSongsForTable(): Observable<Song[]> {
    return this.allSongs$;
  }

  getSongById(songId: number): Song | undefined {
    return undefined
  }
}
