import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { ARTIST_DATA } from '../data/artist.data';
import { Album } from '../model/Album';
import { AlbumEntry } from '../home/home-section/releases-albums/model/AlbumEntry';
import album_list from '../../assets/data/albums.json';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private allAlbums$ = new ReplaySubject<AlbumEntry[]>(1)

  constructor() {
    let oldAlbum: Album[]= album_list
    let newAlbum: AlbumEntry[] = oldAlbum.map(album => album.artist = ARTIST_DATA.find(artist = artist))
    this.allAlbums$.next(album_list)
  }

  getAllAllbums(): Observable<AlbumEntry[]>{
    return this.allAlbums$
  }
}
