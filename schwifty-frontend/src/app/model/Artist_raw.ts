export interface Artist_raw {
  artist: string;
  artistID: number;
  biografie: string;
  gruendung: string;
  cover: string;
}

export interface Artist {
  artist: string;
  artistID: string;
  biografie: string;
  gruendung: Date;
  cover: string;
  soundcloudLink?: string;
  bandcampLink?: string;
  facebookLink?: string;
  instagramLink?: string;
  spotifyLink?: string;
  twitterLink?: string;
  youtubeLink?: string;


}
