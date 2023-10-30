import {inject, Injectable} from '@angular/core';
import {map, tap} from "rxjs/operators";
import {Observable} from "rxjs";
import {AirtableArtist} from "../../../model/AirtableArtist";
import {AirtableAlbum} from "../../../model/AirtableAlbum";
import {AirtableSong} from "../../../model/AirtableSong";
import {AirtableLink} from "../../../model/AirtableLink";
import {AirtableSotw} from "../../../model/AirtableSotw";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {StrapiResponse} from "../../../model/strapi/StrapiResponse";
import {StrapiBand} from "../../../model/strapi/StrapiBand";
import {StrapiAlbum} from "../../../model/strapi/StrapiAlbum";
import {StrapiLink} from "../../../model/strapi/StrapiLink";
import {StrapiSong} from "../../../model/strapi/StrapiSong";
import {StrapiSotw} from "../../../model/strapi/StrapiSotw";

@Injectable({
  providedIn: 'root'
})
export class StrapiService {

  private httpClient = inject(HttpClient);

  bandTable;
  albumTable;
  songTable;
  linkTable;
  sotwTable;

  constructor() {
    this.bandTable = this.getData<StrapiBand>('https://intense-dusk-76391-fd81452d4ceb.herokuapp.com/api/bands')


    this.albumTable = this.getData<StrapiAlbum>('https://intense-dusk-76391-fd81452d4ceb.herokuapp.com/api/albums')

    this.songTable = this.getData<StrapiSong>('https://intense-dusk-76391-fd81452d4ceb.herokuapp.com/api/songs')

    this.linkTable = this.getData<StrapiLink>('https://intense-dusk-76391-fd81452d4ceb.herokuapp.com/api/links')

    this.sotwTable = this.getData<StrapiSotw>('https://intense-dusk-76391-fd81452d4ceb.herokuapp.com/api/schwift-of-the-week')
  }

  getAllArtists(): Observable<StrapiBand[]> {
    console.log('getAllArtists')
    return this.getDataFromStrapi<StrapiBand>(this.bandTable);
  }

  getAllAlbums(): Observable<StrapiAlbum[]> {
    return this.getDataFromStrapi<StrapiAlbum>(this.albumTable);
  }

  getAllSongs(): Observable<StrapiSong[]> {
    return this.getDataFromStrapi<StrapiSong>(this.songTable);
  }


  getAllLinks(): Observable<StrapiLink[]> {
    return this.getDataFromStrapi<StrapiLink>(this.linkTable);
  }

  getAllSotw(): Observable<StrapiSotw[]> {
    return this.getDataFromStrapi<StrapiSotw>(this.bandTable);

  }

  private getData<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(url, {
      headers: {
        Authorization: `Bearer ${environment.apiKey}`
      }
    })
  }

  public getDataFromStrapi<T>(table: StrapiResponse): T[] {
    return table.data.map((item: any): T => {
      return {
        id: item.id,
        ...item.attributes.map((attribute: any) => {
          if (typeof attribute === 'object') {
            this.getDataFromStrapi(attribute)
          } else {
            return attribute;
          }
        })
      }
    })

  }
