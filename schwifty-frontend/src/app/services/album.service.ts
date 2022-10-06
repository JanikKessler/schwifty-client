import {Injectable} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {Album} from '../model/Album';
import {ArtistService} from './artist.service';
import {AirtableAlbum} from "../model/AirtableAlbum";
import {AirtableLink} from "../model/AirtableLink";
import {AirtableService} from "./data-sources/airtable/airtable.service";
import {map} from "rxjs/operators";
import {Artist} from "../model/Artist_raw";
import {Connector} from "./data-sources/Connector";

@Injectable({
  providedIn: 'root',
})
export class AlbumService {

  private airtableAlbums$ = new Observable<AirtableAlbum[]>();
  private airtableLinks$ = new Observable<AirtableLink[]>();
  private artists$ = new Observable<Artist[]>();
  private allAlbums$ = new Observable<Album[]>();

  constructor(private connectorService: Connector) {}


  getAllAllbums(): Observable<Album[]> {
    return this.connectorService.getAllAlbums();
  }
}
