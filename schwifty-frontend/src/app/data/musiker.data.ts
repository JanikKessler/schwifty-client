import { Musiker } from '../model/Musiker';

export const MUSIKER_DATA: Musiker[] = [
  {
    name: 'Thomson',
    image: 'assets/covers/musiker/einstein.jpg',
  },
  {
    name: 'Jonas',
    image: 'assets/covers/musiker/einstein.jpg',
  },
  {
    name: 'Kondinsky',
    image: 'assets/covers/musiker/einstein.jpg',
  },
  {
    name: 'RawRawTyp',
    image: 'assets/covers/musiker/einstein.jpg',
  },
];

export const MUSIKER_MAP: Map<string, Musiker> = new Map<string, Musiker>(MUSIKER_DATA.map(musiker => [musiker.name, musiker]));

