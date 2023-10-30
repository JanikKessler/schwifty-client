export interface StrapiResponse {
    data: StrapiObject[];
    meta: StrapiMeta

}

interface StrapiObject {
  id: number;
  attributes: any;
}

interface StrapiMeta {
  pagination: {
    page: number;
    pageSize:number;
    pageCount: number;
    total: number;
  }
}
