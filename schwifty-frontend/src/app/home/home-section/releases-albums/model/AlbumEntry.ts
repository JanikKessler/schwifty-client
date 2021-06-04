import { Album } from '../../../../model/Album';
import { Artist } from '../../../../model/Artist';

export type AlbumEntry = Album & {artist: Artist}
