import {Injectable} from '@angular/core';
import {StrapiService} from "./strapi.service";
import {combineLatest, Observable, Subject} from "rxjs";
import {Artist} from "../../../model/Artist_raw";
import {Album} from "../../../model/Album";
import {Song} from "../../../model/Song";
import {SchwiftOtw} from "../../../model/SchwiftOtw";
import {AirtableLink} from "../../../model/AirtableLink";
import {AirtableArtist} from "../../../model/AirtableArtist";
import {AirtableAlbum} from "../../../model/AirtableAlbum";
import {AirtableSong} from "../../../model/AirtableSong";
import {AirtableSotw} from "../../../model/AirtableSotw";
import {parseDate} from "ngx-bootstrap/chronos";
import {LinkType} from "../../../enums/LinkType";
import {Connector} from "../Connector";
import {StrapiBand} from "../../../model/strapi/StrapiBand";
import {StrapiLink} from "../../../model/strapi/StrapiLink";
import {StrapiAlbum} from "../../../model/strapi/StrapiAlbum";
import {StrapiSong} from "../../../model/strapi/StrapiSong";

@Injectable()
export class StrapiConnectorService implements Connector{

  private allArtist$ = new Subject<Artist[]>();
  private allAlbums$ = new Subject<Album[]>();
  private allSongs$ = new Subject<Song[]>();
  private allSotws$ = new Subject<SchwiftOtw[]>();

  constructor(
    private strapiService: StrapiService
  ) {
  }

  loadData() {
    combineLatest(
      this.strapiService.getAllArtists(),
      this.strapiService.getAllAlbums(),
      this.strapiService.getAllSongs(),
      this.strapiService.getAllSotw(),
      this.strapiService.getAllLinks(),
    ).subscribe(([
                   artistArray,
                   albumArray,
                   songArray,
                   sotwArray,
                   linkArray
                 ]) => {
      const artists = this.loadArtists(artistArray, linkArray);
      const albums = this.loadAlbums(albumArray, linkArray, artists);
      const songs = this.loadSongs(songArray, linkArray, albums, artists)

      this.allArtist$.next(artists);
      this.allAlbums$.next(albums);
      this.allSongs$.next(songs);

    })
  }

  loadArtists(artists: StrapiBand[], links: StrapiLink[]): Artist[]{
    return artists.map((artist: StrapiBand)=> {


      return {
        artistID: artist.id,
        artist: artist.name,
        cover: artist.bandimage,
        gruendung: parseDate(artist.established),
        biografie: artist.description,
        soundcloudLink: '',
        bandcampLink: '',
        facebookLink: '',
        instagramLink: '',
        spotifyLink: '',
        twitterLink: '',
        youtubeLink: '',
      }})
  }

  loadAlbums(albums: StrapiAlbum[], links: StrapiLink[], artists: Artist[]): Album[]{
    return albums.map((album): Album => {

      return {
        albumID: album.id,
        name: album.title,
        artist: artists.find(artist => artist.artistID === album.band[0]),
        release: album.release,
        duration: parseInt(album.duration),
        tracks: parseInt(album.tracks),
        cover: album.cover ? album.cover : undefined,
        soundcloudLink: '',
        spotifyLink: ''
      };
    });
  }

  loadSongs(songs: StrapiSong[], links: StrapiLink[], albums: Album[], artist: Artist[]): Song[]{
    console.log('songs', songs)
    return songs.map(song => {

      return {
        id: song.id,
        artist: song.band,
        album: song.album,
        cover: song.cover ? song.cover : undefined,
        name: song.title,
        duration: song.duration,
        soundcloudLink: '',
        spotifyLink: '',
        youtubeLink: ''
      };
    })
  }

  loadSotw(sotws: AirtableSotw[], links: AirtableLink[]){

  }

  getAllArtists(): Observable<Artist[]>{
    return this.allArtist$.asObservable()
  }

  getAllAlbums(): Observable<Album[]>{
    return this.allAlbums$.asObservable()
  }

  getAllSongs(): Observable<Song[]>{
    return this.allSongs$.asObservable()
  }

  private getLinkByType(linkArray: AirtableLink[] | undefined, linkTypeRequested: LinkType): string | undefined{
    console.log('linkArray', linkArray)
    if(linkArray){
      return linkArray?.find(link => link.linkType === linkTypeRequested)?.link
    } else {
      return undefined
    }
  }

}
