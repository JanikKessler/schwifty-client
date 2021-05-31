import { Link } from './Links';
import { Musiker } from './Musiker';
import { Album } from './Album';

export interface Artist {
  name: string;
  biografie: string;
  mitglieder: Musiker[];
  gruendungsDatum: string;
  artistCover: string;
  albums?: Album []
  soundcloudLink?: Link;
  youtubeLink?: Link;


}
