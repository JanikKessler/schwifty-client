import {Component, HostListener, OnInit} from '@angular/core';
import {Song} from '../../model/Song';
import {Airtable} from "ngx-airtable";

@Component({
    selector: 'app-home-route',
    templateUrl: './home-route.component.html',
    styleUrls: ['./home-route.component.scss'],
})
export class HomeRouteComponent implements OnInit {
    innerScreenWidth: number = 0;
    currentlyPlayedSong: Song | undefined;

    constructor() {}

    ngOnInit(): void {   }

    @HostListener('window:resize', ['$event'])
    checkInnerWidth() {
        this.innerScreenWidth = innerWidth;
    }

    displayPlayer(song: Song) {
        this.currentlyPlayedSong = song
    }

}
