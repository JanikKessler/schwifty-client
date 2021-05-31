import { Song } from './Song';

export interface Album {
  name: string;
  albumCover: string;
  songs: Song[];
}
