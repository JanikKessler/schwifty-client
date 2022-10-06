import {Album} from './Album';
import {Artist} from './Artist_raw';
import {ExternalLink} from './Links';

export interface Song {
    id: string;
    album: Album;
    artist: Artist;
    cover: string;
    duration: number;
    name: string;
    soundcloudLink?: string;
    spotifyLink?: string;
    youtubeLink?: string;
}
