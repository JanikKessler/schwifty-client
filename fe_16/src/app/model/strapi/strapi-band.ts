export interface StrapiBand {
  data: {
    id: number;
    attributes: {
      created_at: Date;
      name: string;
      description: string;
      established: number;
      bandimage: StrapiImg;
      links:StrapiLink;
      published_at: Date;
      updated_at: Date;
    }
  }[];
  meta: StrapiMetaData;
}

export interface StrapiLink {
  data: {
    id: number;
    attributes: {
      link: string;
      linkttype: string;
      createdAt: Date;
      updatedAt: Date;
      publishedAt: Date;
    }
  }[] | null
}

export interface StrapiImg {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string;
      caption: string;
      width: number;
      height: number;
      formats: {
        large: StrapiImgFormat;
        small: StrapiImgFormat;
        medium: StrapiImgFormat;
        thumbnail: StrapiImgFormat;
      },
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string;
      provider: string;
      provider_metadata: string;
      created_at: Date;
      updated_at: Date;
    }
  }
}

interface StrapiImgFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string;
  size: number;
  width: number;
  height: number;
}

export interface StrapiMetaData {
  pagination: {
    page: number;
    pageCount: number;
    pageSize: number;
    total: number;
  }
}
