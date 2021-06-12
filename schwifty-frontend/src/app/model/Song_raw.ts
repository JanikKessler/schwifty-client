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
    cover: string;
    link: string;
    song: string;
}

export interface Song {
    id: number;
    album: Album;
    artist: Artist;
    cover: string;
    duration: string;
    link: string;
    song: string;
    soundcloudSong?: ExternalLink;
    spotifySong?: ExternalLink;
    youtubeSong?: ExternalLink;
}
