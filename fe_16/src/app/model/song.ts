import {Album} from "./album";
import {Artist} from "./artist";

export interface Song {
  id: number;
  album?: Album;
  artist?: Artist;
  cover?: string;
  duration?: number;
  name: string;
  soundcloudLink?: string;
  spotifyLink?: string;
  youtubeLink?: string;
}
