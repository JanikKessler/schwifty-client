import { Artist } from './Artist';

export interface Event {
  id: number;
  eventTitle: string;
  date: string;
  time: string;
  location: string;
  artists: Artist[];
  beschreibung: string;
}
