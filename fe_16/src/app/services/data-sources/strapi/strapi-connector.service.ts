import {computed, inject, Injectable, Injector, Signal} from '@angular/core';
import {StrapiService} from "./strapi.service";
import {Connector} from "../Connector";
import {StrapiBand} from "../../../model/strapi/strapi-band";
import {Artist} from "../../../model/artist";
import {environment} from "../../../../environments/environment";
import {Album} from "../../../model/album";
import {StrapiAlbum} from "../../../model/strapi/strapi-album";
import {Song} from "../../../model/song";
import {StrapiSong} from "../../../model/strapi/strapi-song";

@Injectable()
export class StrapiConnectorService implements Connector {

  private strapiService = inject(StrapiService);
  private injector: Injector = inject(Injector);

  private allArtists = this.loadAllArtists();
  private allAlbums = this.loadAllAlbums(this.allArtists());
  private allSongs = this.loadAllSongs(this.allArtists(), this.allAlbums());

  loadAllArtists(): Signal<Artist[]> {
    const strapiBand: Signal<StrapiBand | undefined> = this.strapiService.getAllBands();
    return computed((): Artist[] => strapiBand()?.data.map((band): Artist => ({
      id: band.id,
      name: band.attributes.name,
      gruendung: band.attributes.established,
      biografie: band.attributes.description,
      cover: environment.apiUrl + band.attributes.bandimage.data.attributes.url,
      soundcloudLink: band.attributes.links.data ? band.attributes.links.data?.find((link) => link.attributes.linkttype === "soundcloud_artist")?.attributes.link : undefined,
      bandcampLink: band.attributes.links.data ? band.attributes.links.data?.find((link) => link.attributes.linkttype === "bandcamp_artist")?.attributes.link : undefined,
      instagramLink: band.attributes.links.data ? band.attributes.links.data?.find((link) => link.attributes.linkttype === "instagram_artist")?.attributes.link : undefined,
      facebookLink: band.attributes.links.data ? band.attributes.links.data?.find((link) => link.attributes.linkttype === "facebook_artist")?.attributes.link : undefined,
      spotifyLink: band.attributes.links.data ? band.attributes.links.data?.find((link) => link.attributes.linkttype === "spotify_artist")?.attributes.link : undefined,
      twitterLink: band.attributes.links.data ? band.attributes.links.data?.find((link) => link.attributes.linkttype === "twitter_artist")?.attributes.link : undefined,
      youtubeLink: band.attributes.links.data ? band.attributes.links.data?.find((link) => link.attributes.linkttype === "youtube_artist")?.attributes.link: undefined,
    })) ?? []);
  }

  loadAllAlbums(artists: Artist[]): Signal<Album[]> {
    const strapiAlbum: Signal<StrapiAlbum | undefined> = this.strapiService.getAllAlbums();
    return computed((): Album[] => strapiAlbum()?.data.map((album): Album => ({
      id: album.id,
      title: album.attributes.title,
      cover: environment.apiUrl + album.attributes.cover?.data?.attributes.url,
      artist: artists.find((artist) => artist.id === album.attributes.artist?.id),
      duration: album.attributes.duration,
      release: album.attributes.release,
      tracks: album.attributes.tracks,
      soundcloudLink: album.attributes.links.data ? album.attributes.links.data?.find((link) => link.attributes.linkttype === "soundcloud_album")?.attributes.link : undefined,
      spotifyLink: album.attributes.links.data ? album.attributes.links.data?.find((link) => link.attributes.linkttype === "spotify_album")?.attributes.link : undefined,
    })) ?? []);
  }

  loadAllSongs(artists: Artist[], albums: Album[]): Signal<Song[]> {
    const strapiSong: Signal<StrapiSong | undefined> = this.strapiService.getAllSongs();
    return computed((): Song[] => strapiSong()?.data.map((song): Song => ({
      id: song.id,
      album: albums.find((album) => album.id === song.attributes.album?.id),
      artist: artists.find((artist) => artist.id === song.attributes.artist?.id),
      cover: song.attributes.cover?.data?.attributes.url,
      name: song.attributes.title,
      duration: song.attributes.duration,
      soundcloudLink: undefined,
      spotifyLink: undefined,
      youtubeLink: undefined
    })) ?? []);
  }

  getAllArtists(): Signal<Artist[]> {
    console.log(this.allArtists);
    return this.allArtists;
  }

  getAllAlbums(): Signal<Album[]> {
    console.log(this.allAlbums);
    return this.allAlbums;
  }

  getAllSongs(): Signal<Song[]> {
    console.log(this.allSongs());
    return this.allSongs;
  }
}
