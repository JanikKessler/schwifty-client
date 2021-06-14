import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { SongService } from '../../../services/song.service';
import { Song } from '../../../model/Song_raw';
import { map } from 'rxjs/operators';
import { SelectionService } from '../../../services/selection.service';
import { PlayerService } from '../../../services/player.service';
import value from '*.json';

@Component({
    selector: 'app-releases-songs',
    templateUrl: './releases-songs.component.html',
    styleUrls: ['./releases-songs.component.scss'],
})
export class ReleasesSongsComponent implements OnInit {
    @Input() currentlySelectedSong: Song | undefined;
    filteredSongTableEntries: Song[] = [];
    @Output() onSongSelected = new EventEmitter <Song>();
    playerRuns!: boolean;

    constructor(private songService: SongService, private selectionService: SelectionService, private playerService: PlayerService, private changeDetection: ChangeDetectorRef) {
    }

    ngOnInit(): void {

        this.songService.getAllSongsForTable().subscribe(songs => this.filteredSongTableEntries = songs);

        combineLatest([this.songService.getAllSongsForTable(), this.selectionService.getSelectedArtist$()]).pipe(
            map(([songs, artist]) => songs.filter(song => song.artist === artist)),
        ).subscribe(songs => this.filteredSongTableEntries = songs);

        combineLatest([this.songService.getAllSongsForTable(), this.selectionService.getSelectedAlbum$()]).pipe(
            map(([songs, album]) => songs
                .filter(song => song.artist === album.artist)
                .filter(song => song.album?.albumName === album.albumName || album.albumID === 0 )),
        ).subscribe(songs => this.filteredSongTableEntries = songs);

        this.playerService.getPlayerRuns().subscribe(playerRunsBool => {
            this.playerRuns = playerRunsBool
            this.changeDetection.detectChanges()
        } );
    }

    playSong(songEntry: Song) {
        this.onSongSelected.emit(songEntry);
        this.playerService.sendPlayerPlayEvent();
    }

    pauseSong() {
        this.playerService.sendPlayerStopEvent();
    }

}
