import { Song } from './Song';

export interface Album {
  name: string;
  cover: string;
  release: string;
  songs: Song[];
}
