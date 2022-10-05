import {Artist} from './Artist_raw';
import {ExternalLink} from './Links';

export interface Album {
  name: string;
  albumID: string;
  artist: Artist;
  duration?: number;
  release?: string;
  tracks?: number
  cover?:string
  soundcloudLink?: ExternalLink;
  spotifyLink?: ExternalLink;
}
