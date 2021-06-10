import { Album, Album_raw } from './Album_raw';
import { Artist, Artist_raw } from './Artist_raw';
import { ExternalLink } from './Links';

export interface Song_raw {
    album: string;
    albumID: number;
    artist: string;
    artistID: number;
    duration: string;
    id: number;
    link: string;
    song: string;
}

export interface Song {
    id: number;
    album: Album;
    artist: Artist;
    duration: string;
    link: string;
    song: string;
    soundcloud_song?: ExternalLink;
    spotify_song?: ExternalLink;
    youtube_song?: ExternalLink;
}
