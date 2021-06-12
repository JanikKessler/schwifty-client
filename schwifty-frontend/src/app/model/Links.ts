import { LinkType } from '../enums/LinkType';

export interface ExternalLink {
    artistID: number,
    albumID: number,
    songID: number,
    link: string;
    link_type: LinkType

}
