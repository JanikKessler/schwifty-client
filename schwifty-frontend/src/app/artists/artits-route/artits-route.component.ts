import {Component, OnInit} from '@angular/core';
import {Artist, Artist_raw} from '../../model/Artist_raw';
import {Observable} from 'rxjs';
import {ArtistService} from '../../services/artist.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Airtable} from "ngx-airtable";

@Component({
    selector: 'app-artits-route',
    templateUrl: './artits-route.component.html',
    styleUrls: ['./artits-route.component.scss'],
})
export class ArtitsRouteComponent implements OnInit {
    artists$!: Observable<Artist[]>;
    currentlySelectedArtist: Artist_raw | undefined;
    panelOpenState = false;

    constructor(private artistService: ArtistService, private activatedRoute: ActivatedRoute, private airtable: Airtable) {
    }

    ngOnInit(): void {
        this.artists$ = this.artistService.getAllArtists();

        this.activatedRoute.queryParams.subscribe((params: Params) => {
           /* this.currentlySelectedArtist = ARTIST_MAP.get(params['artist'])!;*/
        });
    }
}
