import {Album} from './Album';
import {Artist} from './Artist_raw';
import {ExternalLink} from './Links';

export interface Song_raw {
    album: string;
    albumID: number;
    artist: string;
    artistID: string;
    duration: string;
    id: number;
    cover: string;
    link: string;
    song: string;
}

export interface Song {
    id: string;
    album: Album;
    artist: Artist;
    cover: string;
    duration: number;
    name: string;
    soundcloudLink?: ExternalLink;
    spotifyLink?: ExternalLink;
    youtubeLink?: ExternalLink;
}
