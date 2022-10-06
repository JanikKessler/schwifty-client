import {Observable} from "rxjs";
import {Artist} from "../../model/Artist_raw";
import {Album} from "../../model/Album";
import {Song} from "../../model/Song";

export abstract class Connector {
  abstract loadData(): void;

  abstract getAllArtists(): Observable<Artist[]>;

  abstract getAllAlbums(): Observable<Album[]>;

  abstract getAllSongs(): Observable<Song[]>;
}
