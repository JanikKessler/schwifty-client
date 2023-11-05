import {Inject, inject, Injectable, Injector, Signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {toSignal} from "@angular/core/rxjs-interop";
import {Artist} from "../../../model/artist";
import {Album} from "../../../model/album";
import {StrapiBand} from "../../../model/strapi/strapi-band";
import {StrapiAlbum} from "../../../model/strapi/strapi-album";
import {StrapiSong} from "../../../model/strapi/strapi-song";

@Injectable({
  providedIn: 'root'
})
export class StrapiService {

  private httpClient: HttpClient = inject(HttpClient);
  private injector: Injector = inject(Injector);

  getAllBands(): Signal<StrapiBand | undefined> {
    return this.requestDataFromApi<StrapiBand>("bands", {
      'populate[0]':'links',
      'populate[1]':'bandimage'
    }, );
  }

  getAllAlbums(): Signal<StrapiAlbum | undefined> {
    return this.requestDataFromApi<StrapiAlbum>("albums", {
      'populate[0]':'links',
      'populate[1]':'cover'
    });
  }

  getAllSongs(): Signal<StrapiSong | undefined> {
    return this.requestDataFromApi<StrapiSong>("songs", {
      'populate[0]':'link',
      'populate[1]':'cover'
    });
  }

  // getAllSongs(): Observable<AirtableSong[]> {
  //   return this.getDataFromAirtable<AirtableSong[]>(this.songTable);
  // }
  //
  //
  // getAllLinks(): Observable<AirtableLink[]> {
  //   return this.getDataFromAirtable<AirtableLink[]>(this.linkTable);
  // }
  //
  // getAllSotw(): Observable<AirtableSotw[]> {
  //   return this.getDataFromAirtable<AirtableSotw[]>(this.bandTable);
  //
  // }

  requestDataFromApi<T>(endpoint: 'bands' | 'albums' | 'songs', queryParams?: { [k: string]: string }): Signal<T | undefined> {
    return toSignal(this.httpClient.get<T>(
      `${environment.apiUrl}/api/${endpoint}`,
      {
        params: queryParams,
        headers: {
          'Authorization': `Bearer ${environment.apiKey}`
        }
      }), {initialValue: undefined, injector: this.injector});
  }

}
