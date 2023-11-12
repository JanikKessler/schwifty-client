import {Signal} from "@angular/core";
import {Artist} from "../../model/artist";
import {Album} from "../../model/album";
import {Song} from "../../model/song";

export abstract class Connector {

  abstract loadCmsData(): Promise<void>;

  abstract loadAllArtists():Promise<void>;

  abstract loadAllAlbums(artists: Artist[]):Promise<void>;

  abstract loadAllSongs(artists: Artist[], album: Album[]):Promise<void>;

  abstract getAllArtists(): Signal<Artist[]>;

  abstract getAllAlbums(): Signal<Album[]>;

  abstract getAllSongs(): Signal<Song[]>;

}
