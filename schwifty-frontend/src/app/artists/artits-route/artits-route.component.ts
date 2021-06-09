import { Component, OnInit } from '@angular/core';
import { Artist } from '../../model/Artist';
import { Observable } from 'rxjs';
import { ArtistService } from '../../services/artist.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-artits-route',
    templateUrl: './artits-route.component.html',
    styleUrls: ['./artits-route.component.scss'],
})
export class ArtitsRouteComponent implements OnInit {
    artists$!: Observable<Artist[]>;
    currentlySelectedArtist: Artist | undefined;
    panelOpenState = false;

    constructor(private artistService: ArtistService, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.artists$ = this.artistService.getAllArtists();

        this.activatedRoute.queryParams.subscribe((params: Params) => {
           /* this.currentlySelectedArtist = ARTIST_MAP.get(params['artist'])!;*/
        });
    }
}
