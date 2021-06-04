import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ArtistService } from '../../services/artist.service';
import { combineLatest, Observable, Subject } from 'rxjs';
import { Artist } from '../../model/Artist';
import { EventService } from '../../services/event.service';
import { Event } from '../../model/Event';
import { filter, map } from 'rxjs/operators';
import { ChangeDetection } from '@angular/cli/lib/config/schema';

@Component({
  selector: 'app-events-route',
  templateUrl: './events-route.component.html',
  styleUrls: ['./events-route.component.scss']
})
export class EventsRouteComponent implements OnInit {
  artists$!: Observable<Artist[]>
  allEvents: Event[] = [];
  filteredEvents: Event[] = [];
  currentlySelectedArtist: Artist | undefined;

  constructor(private artistService: ArtistService, private eventService: EventService, private changeDetection: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.artists$ = this.artistService.getAllArtists()

    this.eventService.getAllEvents().subscribe( events => {
      this.allEvents = events;
      if(this.currentlySelectedArtist){
        this.filteredEvents = events.filter(event => event.artists.includes(this.currentlySelectedArtist!))
      } else {
        this.filteredEvents = events
      }
    })
  }

  filterEvents(artist: Artist){
    this.filteredEvents = this.allEvents.filter(event => event.artists.includes(artist))
  }

}
