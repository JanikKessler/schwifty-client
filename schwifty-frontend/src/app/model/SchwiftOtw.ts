import { Album } from './Album_raw';

export interface SchwiftOtw_Raw {
    albumID: number,
    date: string,
    review: string,
    schwiftfaktor: number
}

export interface SchwiftOtw {
    album: Album,
    date: Date,
    review: string,
    schwiftfaktor: number
}

