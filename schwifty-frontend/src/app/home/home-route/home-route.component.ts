import {Component, HostListener, OnInit} from '@angular/core';
import {Song, Song_raw} from '../../model/Song_raw';
import {Airtable} from "ngx-airtable";

@Component({
    selector: 'app-home-route',
    templateUrl: './home-route.component.html',
    styleUrls: ['./home-route.component.scss'],
})
export class HomeRouteComponent implements OnInit {
    songs: Song_raw[] = [];
    innerScreenWidth: number = 0;
    currentlyPlayedSong: Song | undefined;

    constructor(private readonly airtable: Airtable) {
    }

    ngOnInit(): void {   }

    @HostListener('window:resize', ['$event'])
    checkInnerWidth() {
        this.innerScreenWidth = innerWidth;
    }

    displayPlayer(song: Song) {
        this.currentlyPlayedSong = song
    }

}
