import {Component, OnInit} from '@angular/core';
import {AirtableService} from "./services/data-sources/airtable/airtable.service";
import {ArtistService} from "./services/artist.service";
import {AlbumService} from "./services/album.service";
import {AirtableConnectorService} from "./services/data-sources/airtable/airtable-connector.service";
import {Connector} from "./services/data-sources/Connector";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{


  constructor(private connectorService: Connector) {}

  ngOnInit(){
    this.connectorService.loadData();
  }
}
