import {Component, inject, Signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableComponent} from "../table/table.component";
import {Song} from "../../model/song";
import {Connector} from "../../services/data-sources/Connector";

@Component({
  selector: 'app-songs-table',
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: './songs-table.component.html',
  styleUrls: ['./songs-table.component.scss']
})
export class SongsTableComponent {
  allSongs$: Signal<Song[] > = inject(Connector).getAllSongs();
}
