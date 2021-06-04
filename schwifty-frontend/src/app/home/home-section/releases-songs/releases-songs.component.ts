import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from 'src/app/model/Album';
import { SongService } from '../../../services/song.service';
import { Song } from '../../../model/Song';
import { AlbumService } from '../../../services/album.service';
import { map } from 'rxjs/operators';
import { SongTableEntry } from './model/song-table-entry';

@Component({
  selector: 'app-releases-songs',
  templateUrl: './releases-songs.component.html',
  styleUrls: ['./releases-songs.component.scss'],
})
export class ReleasesSongsComponent implements OnInit {
  allSongTableEntries$!: Observable<SongTableEntry[]>;
  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.allSongTableEntries$ =  this.songService.getAllSongsForTable()
  }

}
