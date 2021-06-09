import { Artist } from '../model/Artist';
import { MUSIKER_DATA, MUSIKER_MAP } from './musiker.data';
import { Musikernamen } from '../enums/Musikernamen';

export const ARTIST_DATA: Artist[] = [
  {
    name: 'Modus',
    gruendungsDatum: '06.06.2015',
    biografie: 'blablablub',
    mitglieder: [MUSIKER_MAP.get(Musikernamen.THOMSON)!, MUSIKER_MAP.get(Musikernamen.JONAS)!],
    cover: 'assets/covers/artists/modus.png',
    albums: []
    ,
  },

  {
    name: 'Kandinsky',
    gruendungsDatum: '06.06.2015',
    biografie: 'blablablub',
    mitglieder: [MUSIKER_MAP.get(Musikernamen.KONDINSKY)!],
    cover: 'assets/covers/artists/kandinsky.png',
    albums: [],
  },
  {
    name: 'Kandinsky',
    gruendungsDatum: '06.06.2015',
    biografie: 'blablablub',
    mitglieder: [MUSIKER_MAP.get(Musikernamen.KONDINSKY)!],
    cover: 'assets/covers/artists/kandinsky.png',
    albums: [],
  },

  {
    name: 'Raw Raw Content',
    gruendungsDatum: '06.06.2015',
    biografie: 'blablablub',
    mitglieder: [MUSIKER_MAP.get(Musikernamen.RAWRAWTYP)!],
    cover: 'assets/covers/artists/rawrawcontent.png',
    albums: [],
  },
];

export const ARTIST_MAP: Map<string, Artist> = new Map<string, Artist>(ARTIST_DATA.map(artist => [artist.name, artist]))
