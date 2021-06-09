import { Song_raw } from './Song_raw';
import { Artist } from './Artist';

export interface Album_raw {
  albumId: number;
  album: string;
  artist: string;
  artistID: number;
  duration: number;
  release: string;
  tracks: number;
  cover: string;
}

export interface Album {
  albumId: number;
  album: string;
  artist: Artist;
  duration: number;
  release: string;
  tracks: number
  cover:string
}
