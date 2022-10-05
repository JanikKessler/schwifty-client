import {Injectable} from '@angular/core';
import {combineLatest, Observable, ReplaySubject} from 'rxjs';
import {Artist} from '../model/Artist_raw';
import {parseDate} from 'ngx-bootstrap/chronos';
import {LinkType} from '../enums/LinkType';
import {AirtableService} from "./airtable.service";
import {map} from "rxjs/operators";
import {AirtableArtist} from "../model/AirtableArtist";
import {AirtableLink} from "../model/AirtableLink";

@Injectable({
  providedIn: 'root',
})
export class ArtistService {

  airtableArtists$ = new Observable<AirtableArtist[]>();
  airtableLinks$ = new Observable<AirtableLink[]>();
  artists$ = new Observable<Artist[]>()

  currentlySelectedArtist$ = new ReplaySubject<Artist>(1);
  artistList: Artist[] = [];

  constructor(private airtableService: AirtableService) {
    this.airtableArtists$ = this.airtableService.getAllArtists();
    this.airtableLinks$ = this.airtableService.getAllLinks();

    this.artists$ = combineLatest(this.airtableArtists$, this.airtableLinks$).pipe(map(([artistArray,linkArray]) => {

      return artistArray.map((artist: AirtableArtist)=> {

        const artistLinkArray = linkArray.filter(link => {
          return artist.Links.includes(link.id)
        })

        return {
          artistID: artist.id,
          artist: artist.Band,
          cover: artist.cover[0]?.url,
          gruendung: parseDate(artist.established),
          biografie: artist.description,
          soundcloudLink: artistLinkArray.find(link => link.linkType == LinkType.SOUNDCLOUD_ARTIST)?.link,
          bandcampLink: artistLinkArray.find(link => link.linkType == LinkType.BANDCAMP_ARTIST)?.link,
          facebookLink: artistLinkArray.find(link => link.linkType ==  LinkType.FACEBOOK_ARTIST)?.link,
          instagramLink: artistLinkArray.find(link => link.linkType ==  LinkType.INSTAGRAM_ARTIST)?.link,
          spotifyLink: artistLinkArray.find(link => link.linkType == LinkType.SPOTIFY_ARTIST)?.link,
          twitterLink: artistLinkArray.find(link => link.linkType == LinkType.TWITTER_ARTIST)?.link,
          youtubeLink: artistLinkArray.find(link => link.linkType == LinkType.YOUTUBE_ARTIST)?.link,
        }})
    }));
  };

  getAllArtists(): Observable<Artist[]> {
    return this.artists$;
  }

  setSelectedArtist(selectedArtist: Artist) {
    this.currentlySelectedArtist$.next(selectedArtist);
  }

  getSelectedArtist(): Observable<Artist> {
    return this.currentlySelectedArtist$;

  }

  getArtistById(id: string): Artist {
    return this.artistList.find(artist => artist.artistID === id)!;
  }
}
