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
        data: {
          id: number;
          attributes: {
            name: string;
          }
        }
      };
      album?: {
        data: {
          id: number;
          attributes: {
            title: string;
          }
        }
      };
    }
  }[];
  meta: StrapiMetaData;
}
