import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { SchwiftOtw, SchwiftOtw_Raw } from '../model/SchwiftOtw';
import { isBefore, parseDate } from 'ngx-bootstrap/chronos';
import schwift_otw from '../../assets/data/schwift_otw.json';
import { Album } from '../model/Album_raw';
import { AlbumService } from './album.service';

@Injectable({
    providedIn: 'root',
})
export class SchwiftOtwService {

    currentSchwiftOtw$: ReplaySubject<SchwiftOtw>;

    constructor(private albumService: AlbumService) {
        this.currentSchwiftOtw$ = new ReplaySubject<SchwiftOtw>(1);
        let schwift_otw_raw: SchwiftOtw_Raw[] = schwift_otw;
        const schwift_otw_date = schwift_otw_raw.map((el): SchwiftOtw => {
            return {
                date: parseDate(el.date),
                album: albumService.getAlbumById(el.albumID),
                review: el.review,
                schwiftfaktor: el.schwiftfaktor,
            };
        });
        this.currentSchwiftOtw$.next(schwift_otw_date.sort((a, b) => a.date.getTime() - b.date.getTime()).pop());
    }

    getCurrentSchwiftOtw(): Observable<SchwiftOtw> {
        return this.currentSchwiftOtw$;
    }


}
