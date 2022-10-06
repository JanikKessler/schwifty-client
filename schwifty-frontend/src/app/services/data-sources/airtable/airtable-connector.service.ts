import {Injectable} from '@angular/core';
import {AirtableService} from "./airtable.service";
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

@Injectable()
export class AirtableConnectorService implements Connector{

  private allArtist$ = new Subject<Artist[]>();
  private allAlbums$ = new Subject<Album[]>();
  private allSongs$ = new Subject<Song[]>();
  private allSotws$ = new Subject<SchwiftOtw[]>();

  constructor(
    private airtableService: AirtableService
  ) {
  }

  loadData() {
    combineLatest(
      this.airtableService.getAllArtists(),
      this.airtableService.getAllAlbums(),
      this.airtableService.getAllSongs(),
      this.airtableService.getAllSotw(),
      this.airtableService.getAllLinks(),
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

  loadArtists(artists: AirtableArtist[], links: AirtableLink[]): Artist[]{
    return artists.map((artist: AirtableArtist)=> {

      const artistLinkArray = links.filter(link => {
        return artist.Links?.includes(link.id)
      })

      return {
        artistID: artist.id,
        artist: artist.Band,
        cover: artist.cover[0]?.url,
        gruendung: parseDate(artist.established),
        biografie: artist.description,
        soundcloudLink: this.getLinkByType(artistLinkArray, LinkType.SOUNDCLOUD_ARTIST),
        bandcampLink: this.getLinkByType(artistLinkArray, LinkType.BANDCAMP_ARTIST),
        facebookLink: this.getLinkByType(artistLinkArray, LinkType.FACEBOOK_ARTIST),
        instagramLink: this.getLinkByType(artistLinkArray, LinkType.INSTAGRAM_ARTIST),
        spotifyLink: this.getLinkByType(artistLinkArray, LinkType.SPOTIFY_ARTIST),
        twitterLink: this.getLinkByType(artistLinkArray, LinkType.TWITTER_ARTIST),
        youtubeLink: this.getLinkByType(artistLinkArray, LinkType.YOUTUBE_ARTIST),
      }})
  }

  loadAlbums(albums: AirtableAlbum[], links: AirtableLink[], artists: Artist[]): Album[]{
    return albums.map((album): Album => {

      console.log('album', album)

      const albumLinkArray = links.filter(link => {
        return album.Links.includes(link.id)
      })

      return {
        albumID: album.id,
        name: album.albumName,
        artist: artists.find(artist => artist.artistID === album.band[0]),
        release: album.release,
        duration: parseInt(album.duration),
        tracks: parseInt(album.tracks),
        cover: album.cover ? album.cover[0].url : undefined,
        soundcloudLink: this.getLinkByType(albumLinkArray, LinkType.SOUNDCLOUD_ALBUM),
        spotifyLink: this.getLinkByType(albumLinkArray, LinkType.SPOTIFY_ALBUM)
      };
    });
  }

  loadSongs(songs: AirtableSong[], links: AirtableLink[], albums: Album[], artist: Artist[]): Song[]{
    console.log('songs', songs)
    return songs.map(song => {
      const songLinkArray = links.filter(link => {
        return song.Links?.includes(link.id)
      })

      const album = song.album ? albums.find(al => al.albumID === song.album[0]) : undefined
      const artistOfAlbum = artist.find(a => a.artistID === song?.artist[0])
      return {
        id: song.id,
        artist: artistOfAlbum,
        album: album,
        cover: song.cover ? song.cover[0].url : undefined,
        name: song.name,
        duration: song.duration,
        soundcloudLink: this.getLinkByType(songLinkArray, LinkType.SOUNDCLOUD_SONG),
        spotifyLink: this.getLinkByType(songLinkArray, LinkType.SPOTIFY_SONG),
        youtubeLink: this.getLinkByType(songLinkArray, LinkType.YOUTUBE_SONG)
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
