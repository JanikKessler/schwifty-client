import {Injectable} from '@angular/core';
import {Airtable} from "ngx-airtable";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {AirtableArtist} from "../model/AirtableArtist";
import {AirtableAlbum} from "../model/AirtableAlbum";
import {AirtableSong} from "../model/AirtableSong";
import {AirtableIds} from "../enums/AirtableIds";
import {AirtableLink} from "../model/AirtableLink";
import {AirtableSotw} from "../model/AirtableSotw";

@Injectable({
  providedIn: 'root'
})
export class AirtableService {

  bandTable;
  albumTable;
  songTable;
  linkTable;
  sotwTable;

  constructor(private airtable: Airtable) {
    this.bandTable = airtable.base(AirtableIds.BASE).table({
      tableId: AirtableIds.BAND_TABLE
    });

    this.albumTable = airtable.base(AirtableIds.BASE).table({
      tableId: AirtableIds.ALBUM_TABLE
    });

    this.songTable = airtable.base(AirtableIds.BASE).table({
      tableId: AirtableIds.SONG_TABLE
    });

    this.linkTable = airtable.base(AirtableIds.BASE).table({
      tableId: AirtableIds.LINK_TABLE
    });

    this.sotwTable = airtable.base(AirtableIds.BASE).table({
      tableId: AirtableIds.SOTW_TABLE
    });
  }

  getAllArtists(): Observable<AirtableArtist[]> {
    return this.getDataFromAirtable<AirtableArtist[]>(this.bandTable);
  }

  getAllAlbums(): Observable<AirtableAlbum[]> {
    return this.getDataFromAirtable<AirtableAlbum[]>(this.albumTable);
  }

  getAllSongs(): Observable<AirtableSong[]> {
    return this.getDataFromAirtable<AirtableSong[]>(this.songTable);
  }


  getAllLinks(): Observable<AirtableLink[]> {
    return this.getDataFromAirtable<AirtableLink[]>(this.linkTable);
  }

  getAllSotw(): Observable<AirtableSotw[]> {
    return this.getDataFromAirtable<AirtableSotw[]>(this.bandTable);

  }

  private getDataFromAirtable<T>(table){
    return table.select()
      .all().pipe(
        map((x: any[]):T[] => {
          return x.map((x: any):T => {
            return {
              id: x.id,
              ...x.fields,
            }
          })
        }),
      )
  }

}
