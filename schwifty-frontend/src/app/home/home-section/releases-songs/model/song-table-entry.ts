import { Song_raw } from '../../../../model/Song_raw';
import { Artist } from '../../../../model/Artist';
import { Album_raw } from '../../../../model/Album_raw';

export type SongTableEntry =  Song_raw & { artist: Artist, album: Album_raw };
