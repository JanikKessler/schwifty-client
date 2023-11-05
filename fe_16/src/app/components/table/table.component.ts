import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {Song} from "../../model/song";

@Component({
  selector: 'app-table',
  standalone: true,
    imports: [CommonModule, CommonModule, MatIconModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() listItems: Song[] = [];
  @Input() currentSelectedItem: Song | undefined;
  playerRuns: boolean = false;

  playSong(songEntry: Song) {

  }

  pauseSong() {

  }
}
