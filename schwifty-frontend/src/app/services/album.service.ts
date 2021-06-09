import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Album, Album_raw } from '../model/Album_raw';
import album_list from '../../assets/data/albums.json';
import artist_list from '../../assets/data/artists.json';
import { Artist } from '../model/Artist';

@Injectable({
    providedIn: 'root',
})
export class AlbumService {

    private allAlbums$ = new ReplaySubject<Album[]>(1);
    albumList: Album[];

    constructor() {
        const oldAlbum: Album_raw[] = album_list;
        const artists: Artist[] = artist_list;
        this.albumList = oldAlbum.map((album): Album => {
            return {
                albumId: album.albumId,
                album: album.album,
                artist: artists.find(artist => artist.artistID === album.artistID)!,
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
        return this.albumList.find(album => album.albumId === id)!;
    }
}
