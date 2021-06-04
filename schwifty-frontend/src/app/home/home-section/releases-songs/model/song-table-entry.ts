import { Song } from '../../../../model/Song';
import { Artist } from '../../../../model/Artist';
import { Album } from '../../../../model/Album';

export type SongTableEntry =  Song & { artist: Artist, album: Album };
