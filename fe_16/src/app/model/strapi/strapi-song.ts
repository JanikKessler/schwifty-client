import {StrapiImg, StrapiLink, StrapiMetaData} from "./strapi-band";

export interface StrapiSong {
  data: {
    id: number;
    attributes: {
      title: string;
      duration: number;
      releaseType: string;
      cover: StrapiImg;
      createdAt: Date;
      updatedAt: Date;
      publishedAt:Date;
      link: StrapiLink;
      artist?: {
        id: number;
        attributes: {
          name: string;
        }
      };
      album?: {
        id: number;
        attributes: {
          name: string;
        }
      };
    }
  }[];
  meta: StrapiMetaData;
}
