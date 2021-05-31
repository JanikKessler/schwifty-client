import { Artist } from '../model/Artist';
import { MUSIKER_DATA } from './musiker.data';
import { Musikernamen } from '../enums/Musikernamen';

export const ARTIST_DATA: Artist[] = [
  {
    name: ' Modus',
    gruendungsDatum: '06.06.2015',
    biografie: 'blablablub',
    mitglieder: [MUSIKER_DATA.get(Musikernamen.THOMSON)!, MUSIKER_DATA.get(Musikernamen.JONAS)!],
    artistCover: 'assets/covers/artists/modus.png',
    albums: [
      {
        name: 'Laeufer',
        albumCover: 'assets/covers/albums/modus_laeufer.png',
        songs: [],
      },
    ]
    ,
  },

  {
    name: 'Kandinsky',
    gruendungsDatum: '06.06.2015',
    biografie: 'blablablub',
    mitglieder: [MUSIKER_DATA.get(Musikernamen.JONAS)!],
    artistCover: 'assets/covers/artists/kandinsky.png',
    albums: [
      {
        name: 'Anis',
        albumCover: 'assets/covers/albums/ravijohanis_anis.png',
        songs: [],
      },
    ]
  },
  {
    name: 'Kandinsky',
    gruendungsDatum: '06.06.2015',
    biografie: 'blablablub',
    mitglieder: [MUSIKER_DATA.get(Musikernamen.JONAS)!],
    artistCover: 'assets/covers/artists/kandinsky.png',
    albums: [
      {
        name: 'Anis',
        albumCover: 'assets/covers/albums/ravijohanis_anis.png',
        songs: [],
      },
    ]
  },

  {
    name: 'Raw Raw Content',
    gruendungsDatum: '06.06.2015',
    biografie: 'blablablub',
    mitglieder: [MUSIKER_DATA.get(Musikernamen.JONAS)!],
    artistCover: 'assets/covers/artists/rawrawcontent.png',
    albums: [
      {
        name: 'Anis',
        albumCover: 'assets/covers/albums/ravijohanis_anis.png',
        songs: [],
      },
    ]
  },
];
