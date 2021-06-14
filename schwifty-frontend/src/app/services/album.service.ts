import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Album, Album_raw } from '../model/Album_raw';
import album_list from '../../assets/data/albums.json';
import { ArtistService } from './artist.service';
import { ExternalLink } from '../model/Links';
import { LinkType } from '../enums/LinkType';
import link_list from '../../assets/data/links.json';

@Injectable({
    providedIn: 'root',
})
export class AlbumService {
    private allAlbums$ = new ReplaySubject<Album[]>(1);
    albumList: Album[];

    constructor(private artistService: ArtistService) {
        const oldAlbum: Album_raw[] = album_list;
        const linkList: ExternalLink[] = link_list;
        const albumLinks: ExternalLink[] = linkList.filter(link => link.link_type === LinkType.SOUNDCLOUD_ALBUM);
        this.albumList = oldAlbum.map((album): Album => {
            return {
                albumID: album.albumID,
                name: album.albumName,
                artist: this.artistService.getArtistById(album.artistID),
                release: album.release,
                duration: album.duration,
                tracks: album.tracks,
                cover: album.cover,
                soundcloudLink: albumLinks.find(link => link.albumID === album.albumID)
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
