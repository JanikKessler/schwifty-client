import {
    AfterViewInit,
    Component,
    ElementRef, EventEmitter,
    Input,
    OnChanges,
    OnInit, Output,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';
import { Song } from '../../../../model/Song_raw';
import { PlayerService } from '../../../../services/player.service';

declare var SC: any;

@Component({
    selector: 'app-song-player',
    templateUrl: './song-player.component.html',
    styleUrls: ['./song-player.component.scss'],
})
export class SongPlayerComponent implements OnInit, OnChanges {
    @Input() song!: Song;
    @Output() onPlayerClose = new EventEmitter<void>();
    widget: any;


    constructor(private playerService: PlayerService) {
    }

    ngOnChanges() {
        this.widget = SC.Widget('sc-widget');
        this.widget.load(this.song.soundcloudSong?.link, {
            auto_play: true,
            sharing: false,
            hide_related: true,
            show_comments: true,
            show_user: true,
            show_reposts: false,
            show_teaser: false,
        });
    }

    ngOnInit(): void {
        this.playerService.getPlayerPlayEvent().subscribe(() => {
                this.widget.play();
        });

        this.playerService.getPlayerStopEvent().subscribe(() => {
            this.widget.pause();
        });

        this.widget.bind(SC.Widget.Events.PLAY, () => {
            this.playerService.setPlayerRuns(true);
        });

        this.widget.bind(SC.Widget.Events.PAUSE, () => {
            this.playerService.setPlayerRuns(false);
        });
    }

    closePlayer() {
        this.onPlayerClose.emit();
    }
}
