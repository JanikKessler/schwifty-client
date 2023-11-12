import {StrapiImg, StrapiLink, StrapiMetaData} from "./strapi-band";

export interface StrapiAlbum {
  data: {
    id: number;
    attributes: {
      title: string;
      band?: {
        data:{
          id: number;
          attributes: {
            name: string;
          }
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
