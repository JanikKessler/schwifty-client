import { Artist, Artist_raw } from './Artist_raw';

export interface Event_raw {
  begin: number;
  date: string;
  description: string;
  location: string;
  name: string;
  otherArtists: string;
}

export interface Event {
  begin: number;
  date: string;
  description: string;
  location: string;
  name: string;
  otherArtists: Artist[];
}
