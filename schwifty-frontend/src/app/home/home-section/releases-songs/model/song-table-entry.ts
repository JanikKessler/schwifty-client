import { Song_raw } from '../../../../model/Song_raw';
import { Artist_raw } from '../../../../model/Artist_raw';
import { Album_raw } from '../../../../model/Album_raw';

export type SongTableEntry =  Song_raw & { artist: Artist_raw, album: Album_raw };
