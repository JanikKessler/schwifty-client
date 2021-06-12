import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Album, Album_raw } from '../model/Album_raw';
import album_list from '../../assets/data/albums.json';
import artist_list from '../../assets/data/artists.json';
import { Artist_raw } from '../model/Artist_raw';
import { ArtistService } from './artist.service';

@Injectable({
    providedIn: 'root',
})
export class AlbumService {

    private allAlbums$ = new ReplaySubject<Album[]>(1);
    albumList: Album[];

    constructor(private artistService: ArtistService) {
        const oldAlbum: Album_raw[] = album_list;
        const artists: Artist_raw[] = artist_list;
        this.albumList = oldAlbum.map((album): Album => {
            return {
                albumID: album.albumID,
                albumName: album.albumName,
                artist: this.artistService.getArtistById(album.artistID),
                release: album.release,
                duration: album.duration,
                tracks: album.tracks,
                cover: album.cover,
            };
        });
        this.allAlbums$.next(this.albumList);
    }

    getAllAllbums(): Observable<Album[]> {
        return this.allAlbums$;
    }

    getAlbumById(id: number): Album {
        return this.albumList.find(album => album.albumID === id)!;
    }
}
