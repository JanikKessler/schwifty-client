import {StrapiBand} from "./StrapiBand";

export interface StrapiAlbum {
  id: string;
  title: string;
  band: StrapiBand;
  cover: string;
  duration: string;
  release: string;
  tracks: string;
}
