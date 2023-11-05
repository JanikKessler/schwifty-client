import {Signal} from "@angular/core";
import {Artist} from "../../model/artist";
import {Album} from "../../model/album";
import {Song} from "../../model/song";

export abstract class Connector {
  abstract loadAllArtists(): Signal<Artist[]>;

  abstract loadAllAlbums(artists: Artist[]): Signal<Album[]>;

  abstract loadAllSongs(artists: Artist[], album: Album[]): Signal<Song[]>;

  abstract getAllArtists(): Signal<Artist[]>;

  abstract getAllAlbums(): Signal<Album[]>;

  abstract getAllSongs(): Signal<Song[]>;

}
