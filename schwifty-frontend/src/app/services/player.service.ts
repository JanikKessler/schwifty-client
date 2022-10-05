import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PlayerService {
    playerControlSongTable$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    playerStopEvent: Subject<void> = new Subject<void>();
    playerPlayEvent: Subject<void> = new Subject<void>();

    constructor() {
    }

    setPlayerRuns(value: boolean) {
        this.playerControlSongTable$.next(value);
    }

    getPlayerRuns(): Observable<boolean> {
        return this.playerControlSongTable$;
    }

    sendPlayerPlayEvent() {
        this.playerPlayEvent.next()
    }

    getPlayerPlayEvent(): Observable<void> {
        return this.playerPlayEvent;
    }

    sendPlayerStopEvent() {
        this.playerStopEvent.next()
    }

    getPlayerStopEvent(): Observable<void> {
        return this.playerStopEvent;
    }
}
