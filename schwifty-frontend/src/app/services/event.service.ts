import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Event } from '../model/Event';
import { EVENT_DATA } from '../data/event.data';
import { ARTIST_DATA, ARTIST_MAP } from '../data/artist.data';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  allEvents$: ReplaySubject<Event[]> = new ReplaySubject<Event[]>(1)

  constructor() {
    console.log(ARTIST_MAP)
    this.allEvents$.next(EVENT_DATA)
  }

  getAllEvents(): Observable<Event[]>{
    console.log(

    )
    return this.allEvents$
  }
}
