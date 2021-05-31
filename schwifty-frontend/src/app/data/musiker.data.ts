import { Musiker } from '../model/Musiker';
import { Musikernamen } from '../enums/Musikernamen';

export const MUSIKER_DATA: Map<Musikernamen,Musiker> = new Map<Musikernamen, Musiker>();

const thomson: Musiker = {
  name: 'Thomson'
}

MUSIKER_DATA.set(Musikernamen.THOMSON,thomson)

