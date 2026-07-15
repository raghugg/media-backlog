export type MediaType =
  | 'MOVIE'
  | 'TV_SHOW'
  | 'BOOK'
  | 'VIDEO_GAME'
  | 'PODCAST'
  | 'SONG'
  | 'ALBUM'
  | 'VIDEO'
  | 'OTHER';

export interface Media {
  id: number;
  title: string;
  type: MediaType;
}
