import { ExternalLink } from './Links';

export interface Artist_raw {
  artist: string;
  artistID: number;
  biografie: string;
  gruendung: string;
  cover: string;
}

export interface Artist {
  artist: string;
  artistID: number;
  biografie: string;
  gruendung: Date;
  cover: string;
  soundcloudLink?: ExternalLink;
  bandcampLink?: ExternalLink;
  facebookLink?: ExternalLink;
  instagramLink?: ExternalLink;
  spotifyLink?: ExternalLink;
  twitterLink?: ExternalLink;
  youtubeLink?: ExternalLink;


}
