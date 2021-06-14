import { Album } from './Album_raw';
import { ReleaseType } from '../enums/ReleaseType';
import { Song } from './Song_raw';

export interface SchwiftOtw_Raw {
    albumID: number,
    artistName: number,
    date: string,
    releaseID: number,
    releaseType: ReleaseType,
    review: string,
    reviewerin: string,
    schwiftfaktor:number,
    songID: number,

}

export interface SchwiftOtw {
    release: Album | Song | undefined,
    date: Date,
    review: string,
    reviewerin: string,
    schwiftfaktor: number
}
