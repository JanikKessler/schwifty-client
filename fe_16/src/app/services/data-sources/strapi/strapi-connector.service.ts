import {computed, inject, Injectable, Injector, signal, Signal} from '@angular/core';
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

  private allArtists = signal<Artist[]>([])
  private allAlbums = signal<Album[]>([])
  private allSongs = signal<Song[]>([])

  async loadCmsData(): Promise<void> {
    try {
      await this.loadAllArtists();
      await this.loadAllAlbums(this.allArtists());
      console.log(this.allAlbums());
      await this.loadAllSongs(this.allArtists(), this.allAlbums());
    } catch (e) {
      throw new Error("Error loading CMS data");
    }

  }

  async loadAllArtists() {
    const strapiBand: StrapiBand = await this.strapiService.getAllBands();
    this.allArtists.set( strapiBand?.data.map((band): Artist => ({
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

  async loadAllAlbums(artists: Artist[]) {
    const strapiAlbum: StrapiAlbum = await this.strapiService.getAllAlbums();
    console.log(strapiAlbum);
    this.allAlbums.set(strapiAlbum?.data.map((album): Album => ({
      id: album.id,
      title: album.attributes.title,
      cover: environment.apiUrl + album.attributes.cover?.data?.attributes.url,
      artist: artists.find((artist) => artist.id === album.attributes.band?.data.id),
      duration: album.attributes.duration,
      release: album.attributes.release,
      tracks: album.attributes.tracks,
      soundcloudLink: album.attributes.links.data ? album.attributes.links.data?.find((link) => link.attributes.linkttype === "soundcloud_album")?.attributes.link : undefined,
      spotifyLink: album.attributes.links.data ? album.attributes.links.data?.find((link) => link.attributes.linkttype === "spotify_album")?.attributes.link : undefined,
    })) ?? []);
  }

  async loadAllSongs(artists: Artist[], albums: Album[]){
    const strapiSong: StrapiSong = await this.strapiService.getAllSongs();
    console.log(strapiSong);

    this.allSongs.set(strapiSong?.data.map((song): Song => ({
      id: song.id,
      album: albums.find((album) => album.id === song.attributes.album?.data.id),
      artist: artists.find((artist) => artist.id === song.attributes.artist?.data.id),
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
