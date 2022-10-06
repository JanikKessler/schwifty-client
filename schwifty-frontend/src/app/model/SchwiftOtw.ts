import {Album} from './Album';
import {ReleaseType} from '../enums/ReleaseType';
import {Song} from './Song';

export interface SchwiftOtw_Raw {
    albumID: string,
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
