import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {combineLatest} from 'rxjs';
import {SongService} from '../../../services/song.service';
import {Song} from '../../../model/Song_raw';
import {map} from 'rxjs/operators';
import {SelectionService} from '../../../services/selection.service';
import {PlayerService} from '../../../services/player.service';

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
                .filter(song => song.artist.artistID === album.artist.artistID)
                .filter(song => song.album?.name === album.name || album.albumID === undefined )),
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
