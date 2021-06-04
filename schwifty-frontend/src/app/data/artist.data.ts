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
    albums: [
      {
        name: 'Laeufer',
        cover: 'assets/covers/albums/modus_laeufer.png',
        release: '06/06/2021',
        songs: [{
          title: 'lol',
          duration: '1:45',
          release: '06.06.2021',
          schwiftFaktor: 42
        },
          {
            title: 'lol',
            duration: '1:45',
            release: '06.06.2021',
            schwiftFaktor: 42
          },
          {
            title: 'lol',
            duration: '1:45',
            release: '06.06.2021',
            schwiftFaktor: 42
          }],
      },
    ]
    ,
  },

  {
    name: 'Kandinsky',
    gruendungsDatum: '06.06.2015',
    biografie: 'blablablub',
    mitglieder: [MUSIKER_MAP.get(Musikernamen.KONDINSKY)!],
    cover: 'assets/covers/artists/kandinsky.png',
    albums: [
      {
        name: 'Anis',
        cover: 'assets/covers/albums/ravijohanis_anis.png',
        release: '06/06/2021',
        songs: [{
          title: 'lol',
          duration: '1:45',
          release: '06.06.2021',
          schwiftFaktor: 42
        },
          {
            title: 'lol',
            duration: '1:45',
            release: '06.06.2021',
            schwiftFaktor: 42
          },
          {
            title: 'lol',
            duration: '1:45',
            release: '06.06.2021',
            schwiftFaktor: 42
          }],
      },
    ],
  },
  {
    name: 'Kandinsky',
    gruendungsDatum: '06.06.2015',
    biografie: 'blablablub',
    mitglieder: [MUSIKER_MAP.get(Musikernamen.KONDINSKY)!],
    cover: 'assets/covers/artists/kandinsky.png',
    albums: [
      {
        name: 'Anis',
        cover: 'assets/covers/albums/ravijohanis_anis.png',
        release: '06/06/2021',
        songs: [
          {
            title: 'lol',
            duration: '1:45',
            release: '06.06.2021',
            schwiftFaktor: 42
          },
          {
            title: 'lol',
            duration: '1:45',
            release: '06.06.2021',
            schwiftFaktor: 42
          },
          {
            title: 'lol',
            duration: '1:45',
            release: '06.06.2021',
            schwiftFaktor: 42
          }
        ],
      },
    ],
  },

  {
    name: 'Raw Raw Content',
    gruendungsDatum: '06.06.2015',
    biografie: 'blablablub',
    mitglieder: [MUSIKER_MAP.get(Musikernamen.RAWRAWTYP)!],
    cover: 'assets/covers/artists/rawrawcontent.png',
    albums: [
      {
        name: 'Anis',
        cover: 'assets/covers/albums/ravijohanis_anis.png',
        release: '06/06/2021',
        songs: [{
          title: 'lol',
          duration: '1:45',
          release: '06.06.2021',
          schwiftFaktor: 42,
        },
          {
            title: 'lol',
            duration: '1:45',
            release: '06.06.2021',
            schwiftFaktor: 42,
          },
          {
            title: 'lol',
            duration: '1:45',
            release: '06.06.2021',
            schwiftFaktor: 42,
          },
          {
            title: 'lol',
            duration: '1:45',
            release: '06.06.2021',
            schwiftFaktor: 42,
          }],
      },
    ],
  },
];

export const ARTIST_MAP: Map<string, Artist> = new Map<string, Artist>(ARTIST_DATA.map(artist => [artist.name, artist]))
