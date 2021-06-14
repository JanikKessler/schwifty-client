import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { SchwiftOtw, SchwiftOtw_Raw } from '../model/SchwiftOtw';
import { parseDate } from 'ngx-bootstrap/chronos';
import schwift_otw from '../../assets/data/schwift_otw.json';
import { AlbumService } from './album.service';
import { ReleaseType } from '../enums/ReleaseType';
import { SongService } from './song.service';

@Injectable({
    providedIn: 'root',
})
export class SchwiftOtwService {

    currentSchwiftOtw$: ReplaySubject<SchwiftOtw>;

    constructor(private albumService: AlbumService, private songService: SongService) {
        this.currentSchwiftOtw$ = new ReplaySubject<SchwiftOtw>(1);
        let schwift_otw_raw: SchwiftOtw_Raw[] = schwift_otw;
        const schwift_otw_date = schwift_otw_raw.map((el): SchwiftOtw => {
            return {
                date: parseDate(el.date),
                release: el.releaseType === ReleaseType.ALBUM ?  albumService.getAlbumById(el.albumID) : this.songService.getSongById(el.songID) ,
                review: el.review,
                reviewerin: el.reviewerin,
                schwiftfaktor: el.schwiftfaktor,
            };
        });
        console.log(schwift_otw_date)
        this.currentSchwiftOtw$.next(schwift_otw_date.sort((a, b) => a.date.getTime() - b.date.getTime()).pop());
    }

    getCurrentSchwiftOtw(): Observable<SchwiftOtw> {
        return this.currentSchwiftOtw$;
    }

}
