import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Song} from '../model/Song';
import {Connector} from "./data-sources/Connector";


@Injectable({
  providedIn: 'root',
})
export class SongService {
  constructor(private connectorService: Connector) {}

  getAllSongsForTable(): Observable<Song[]> {
    return this.connectorService.getAllSongs();
  }

  getSongById(songId: number): Song | undefined {
    return undefined
  }
}
