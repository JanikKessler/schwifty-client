import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Artist, Artist_raw } from '../model/Artist_raw';
import artist_list from '../../assets/data/artists.json';
import link_list from '../../assets/data/links.json';
import { parseDate } from 'ngx-bootstrap/chronos';
import { ExternalLink } from '../model/Links';
import { LinkType } from '../enums/LinkType';
import { Album } from '../model/Album_raw';

@Injectable({
    providedIn: 'root',
})
export class ArtistService {

    artists$ = new ReplaySubject<Artist[]>(1);
    currentlySelectedArtist$ = new ReplaySubject<Artist>(1);
    artistList: Artist[] = [];

    constructor() {
        const oldArtists: Artist_raw[] = artist_list;
        const linkList: ExternalLink[] = link_list;
        this.artistList = oldArtists.map((artist): Artist => {
            const artistLinks: ExternalLink[] = linkList.filter(link => link.artistID === artist.artistID);
            return {
                artistID: artist.artistID,
                artist: artist.artist,
                cover: artist.cover,
                gruendung: parseDate(artist.gruendung),
                biografie: artist.biografie,
                soundcloudLink: artistLinks.find(link => link.link_type === LinkType.SOUNDCLOUD_ARTIST),
                bandcampLink: artistLinks.find(link => link.link_type === LinkType.BANDCAMP_ARTIST),
                facebookLink: artistLinks.find(link => link.link_type === LinkType.FACEBOOK_ARTIST),
                instagramLink: artistLinks.find(link => link.link_type === LinkType.INSTAGRAM_ARTIST),
                spotifyLink: artistLinks.find(link => link.link_type === LinkType.SPOTIFY_ARTIST),
                twitterLink: artistLinks.find(link => link.link_type === LinkType.TWITTER_ARTIST),
                youtubeLink: artistLinks.find(link => link.link_type === LinkType.YOUTUBE_ARTIST),

            };
        });
        this.artists$.next(this.artistList);
    }

    getAllArtists(): Observable<Artist[]> {
        return this.artists$;
    }

    setSelectedArtist(selectedArtist: Artist) {
        this.currentlySelectedArtist$.next(selectedArtist);
    }

    getSelectedArtist(): Observable<Artist> {
        return this.currentlySelectedArtist$;

    }

    getArtistById(id: number): Artist{
        return this.artistList.find(artist => artist.artistID === id)!;
    }
}
