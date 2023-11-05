import {StrapiImg, StrapiLink, StrapiMetaData} from "./strapi-band";

export interface StrapiAlbum {
  data: {
    id: number;
    attributes: {
      title: string;
      artist?: {
        id: number;
        attributes: {
          name: string;
        }
      };
      duration?: number;
      release?: number;
      tracks?: number
      cover?: StrapiImg
      links: StrapiLink;
    }
  }[];
  meta: StrapiMetaData;
}
