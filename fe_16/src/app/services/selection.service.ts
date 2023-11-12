import {Injectable, Signal, signal} from '@angular/core';
import {Artist} from "../model/artist";
import {Album} from "../model/album";

@Injectable({
  providedIn: 'root'
})
export class SelectionService {

  private selectedArtistSignal = signal<Artist | null>(null);
  private selectedAlbumSignal = signal<Album | null>(null);


  getSelectedArtistSignal(): Signal<Artist | null> {
    return this.selectedArtistSignal;
  }

  setSelectedArtist(artist: Artist) {
    this.selectedArtistSignal.set(artist);
  }

  getSelectedAlbumSignal(): Signal<Album | null> {
    return this.selectedAlbumSignal;
  }

  setSelectedAlbum(album: Album) {
    this.selectedAlbumSignal.set(album);
  }
}


