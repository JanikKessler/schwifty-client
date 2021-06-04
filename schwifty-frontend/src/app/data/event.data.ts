import { Event } from '../model/Event';
import { ARTIST_MAP } from './artist.data';
import { Artistnamen } from '../enums/Artistnamen';

export const EVENT_DATA: Event[] = [
  {
    id: 0,
    eventTitle: 'BirthdayBash',
    date: '06/06/2021',
    time: '20:00',
    artists: [ARTIST_MAP.get(Artistnamen.MODUS)!],
    beschreibung: 'is voll toll',
    location: 'Aachen',
  },
  {
    id: 1,
    eventTitle: 'BirthdayBash',
    date: '06/06/2021',
    time: '20:00',
    artists: [ARTIST_MAP.get(Artistnamen.MODUS)!, ARTIST_MAP.get(Artistnamen.KANDINSKY)!],
    beschreibung: 'is voll toll',
    location: 'Aachen',
  },
  {
    id: 2,
    eventTitle: 'BirthdayBash',
    date: '06/06/2021',
    time: '20:00',
    artists: [ARTIST_MAP.get(Artistnamen.MODUS)!, ARTIST_MAP.get(Artistnamen.RAWRAWCONTENT)!],
    beschreibung: 'is voll toll',
    location: 'Aachen',
  }, {
    id: 3,
    eventTitle: 'BirthdayBash',
    date: '06/06/2021',
    time: '20:00',
    artists: [ARTIST_MAP.get(Artistnamen.MODUS)!],
    beschreibung: 'is voll toll',
    location: 'Aachen',
  },
  {
    id: 4,
    eventTitle: 'BirthdayBash',
    date: '06/06/2021',
    time: '20:00',
    artists: [ARTIST_MAP.get(Artistnamen.MODUS)!],
    beschreibung: 'is voll toll',
    location: 'Aachen',
  },
  {
    id: 5,
    eventTitle: 'BirthdayBash',
    date: '06/06/2021',
    time: '20:00',
    artists: [ARTIST_MAP.get(Artistnamen.KANDINSKY)!],
    beschreibung: 'is voll toll',
    location: 'Aachen',
  },
];
