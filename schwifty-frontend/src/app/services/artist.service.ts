import {Injectable} from '@angular/core';
import {combineLatest, Observable, ReplaySubject} from 'rxjs';
import {Artist} from '../model/Artist_raw';
import {parseDate} from 'ngx-bootstrap/chronos';
import {LinkType} from '../enums/LinkType';
import {AirtableService} from "./data-sources/airtable/airtable.service";
import {map} from "rxjs/operators";
import {AirtableArtist} from "../model/AirtableArtist";
import {AirtableLink} from "../model/AirtableLink";
import {AirtableConnectorService} from "./data-sources/airtable/airtable-connector.service";
import {Connector} from "./data-sources/Connector";

@Injectable({
  providedIn: 'root',
})
export class ArtistService {

  airtableArtists$ = new Observable<AirtableArtist[]>();
  airtableLinks$ = new Observable<AirtableLink[]>();
  artists$ = new Observable<Artist[]>()

  currentlySelectedArtist$ = new ReplaySubject<Artist>(1);
  artistList: Artist[] = [];

  constructor(private connectorService: Connector) {};

  getAllArtists(): Observable<Artist[]> {
    return this.connectorService.getAllArtists();
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
