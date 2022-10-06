import {Song_raw} from '../../../../model/Song';
import {Artist_raw} from '../../../../model/Artist_raw';
import {Album} from '../../../../model/Album';

export type SongTableEntry =  Song_raw & { artist: Artist_raw, album: Album };
