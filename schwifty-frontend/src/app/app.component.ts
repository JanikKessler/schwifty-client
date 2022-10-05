import {Component, OnInit} from '@angular/core';
import {AirtableService} from "./services/airtable.service";
import {ArtistService} from "./services/artist.service";
import {AlbumService} from "./services/album.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{


  constructor(private artistService: ArtistService, private albumService: AlbumService, private airtableService: AirtableService) {
    artistService.getAllArtists().subscribe(x =>
      console.log('test',x)
    )
    albumService.getAllAllbums().subscribe(x =>
      console.log('testAlbum',x)
    )


  }

  ngOnInit(){
  }
}
