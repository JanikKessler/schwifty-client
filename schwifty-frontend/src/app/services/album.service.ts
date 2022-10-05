import {Injectable} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {Album} from '../model/Album';
import {ArtistService} from './artist.service';
import {AirtableAlbum} from "../model/AirtableAlbum";
import {AirtableLink} from "../model/AirtableLink";
import {AirtableService} from "./airtable.service";
import {map} from "rxjs/operators";
import {Artist} from "../model/Artist_raw";

@Injectable({
  providedIn: 'root',
})
export class AlbumService {

  private airtableAlbums$ = new Observable<AirtableAlbum[]>();
  private airtableLinks$ = new Observable<AirtableLink[]>();
  private artists$ = new Observable<Artist[]>();
  private allAlbums$ = new Observable<Album[]>();

  constructor(private airtableService: AirtableService, private artistService: ArtistService) {
    this.airtableLinks$ = this.airtableService.getAllLinks();
    this.airtableAlbums$ = this.airtableService.getAllAlbums();
    this.artists$ = this.artistService.getAllArtists();

    this.airtableAlbums$.subscribe(x => console.log('albumsLoaded', x))
    this.airtableLinks$.subscribe(x => console.log('linksLoaded', x))

    console.log('loaded')

    this.allAlbums$ = combineLatest(
      this.airtableAlbums$,
      this.airtableLinks$,
      this.artists$)
      .pipe(
        map(([
               albumArray,
               linkArray,
               artistArray]) => {
          console.log('albumArray', albumArray)
          return albumArray.map((album): Album => {
            return {
              albumID: album.id,
              name: album.albumName,
              artist: artistArray.find(artist => artist.artistID === album.band[0]),
              release: album.release,
              duration: parseInt(album.duration),
              tracks: parseInt(album.tracks),
              cover: album.cover ? album.cover[0].url : undefined
              /* soundcloudLink: albumLinks.find(link => link.albumID === album.albumID)*/
            };
          });
        })
      );
  }

  getAllAllbums(): Observable<Album[]> {
    return this.allAlbums$;
  }
}
