import { Album, Album_raw } from './Album_raw';
import { Artist } from './Artist';

export interface Song_raw {
  album: string;
  artist: string;
  duration: string;
  link: string;
  song: string;
}

export interface Song {
  album: Album_raw;
  artist: Artist;
  duration: string;
  link: string;
  song: string;
}
