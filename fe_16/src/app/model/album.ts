import {Artist} from "./artist";

export interface Album {
  id: number;
  title: string;
  artist?: Artist;
  duration?: number;
  release?: number;
  tracks?: number;
  cover?:string;
  soundcloudLink?: string;
  spotifyLink?: string;
}
