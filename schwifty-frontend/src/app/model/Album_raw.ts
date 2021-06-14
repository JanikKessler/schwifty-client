import { Song_raw } from './Song_raw';
import { Artist, Artist_raw } from './Artist_raw';

export interface Album_raw {
  albumName: string;
  albumID: number;
  artist: string;
  artistID: number;
  duration: number;
  release: string;
  tracks: number;
  cover: string;
}

export interface Album {
  albumName: string;
  albumID: number;
  artist: Artist;
  duration?: number;
  release?: string;
  tracks?: number
  cover?:string
}
