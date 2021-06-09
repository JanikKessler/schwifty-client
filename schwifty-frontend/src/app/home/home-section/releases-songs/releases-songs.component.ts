import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { Album_raw } from 'src/app/model/Album_raw';
import { SongService } from '../../../services/song.service';
import { Song, Song_raw } from '../../../model/Song_raw';
import { AlbumService } from '../../../services/album.service';
import { map } from 'rxjs/operators';
import { SongTableEntry } from './model/song-table-entry';
import { SelectionService } from '../../../services/selection.service';

@Component({
  selector: 'app-releases-songs',
  templateUrl: './releases-songs.component.html',
  styleUrls: ['./releases-songs.component.scss'],
})
export class ReleasesSongsComponent implements OnInit {
  allSongTableEntries$!: Observable<Song[]>;
  filteredSongTableEntries: Song[] = [];
  constructor(private songService: SongService, private selectionService: SelectionService) {
  }

  ngOnInit(): void {

    this.songService.getAllSongsForTable().subscribe(songs => this.filteredSongTableEntries = songs)

    combineLatest([this.songService.getAllSongsForTable(), this.selectionService.getSelectedArtist$()]).pipe(
        map(([songs,artist]) => songs.filter(song => song.artist === artist))
    ).subscribe(songs => this.filteredSongTableEntries = songs)

    combineLatest([this.songService.getAllSongsForTable(), this.selectionService.getSelectedAlbum$()]).pipe(
        map(([songs,album]) => songs.filter(song => song.album.album === album.album))
    ).subscribe(songs => this.filteredSongTableEntries = songs)

    console.log(this.allSongTableEntries$)
  }

}
