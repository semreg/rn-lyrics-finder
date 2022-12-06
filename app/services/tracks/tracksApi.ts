import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  FetchLyricsRawResponse,
  FetchTrackByIdRawResponse,
  FetchTracksRawResponse,
  Lyrics,
  Track,
  TrackDetails
} from './tracksTypes'

const API_KEY = 'dfd372d5ec2f6ded6303ff82815e84e2'

export const tracksApi = createApi({
  reducerPath: 'tracksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.musixmatch.com/ws/1.1/'
  }),
  endpoints: builder => ({
    fetchTracks: builder.query({
      query: () => ({
        url: 'chart.tracks.get',
        params: {
          apikey: API_KEY,
          chart_name: 'top',
          page: 1,
          page_size: 20,
          country: 'ua',
          has_lyrics: 1
        }
      }),
      transformResponse: (response: FetchTracksRawResponse): Track[] =>
        response.message.body.track_list.map(item => ({
          trackId: item.track.track_id,
          commontrackId: item.track.commontrack_id,
          trackName: item.track.track_name,
          artistName: item.track.artist_name
        }))
    }),
    fetchTrackById: builder.query({
      query: (commontrackId: number) => ({
        url: 'track.get',
        params: {
          apikey: API_KEY,
          commontrack_id: commontrackId
        }
      }),
      transformResponse: (response: FetchTrackByIdRawResponse): TrackDetails => ({
        trackId: response.message.body.track.track_id,
        commontrackId: response.message.body.track.commontrack_id,
        trackName: response.message.body.track.track_name,
        artistName: response.message.body.track.artist_name,
        albumName: response.message.body.track.album_name,
        trackShareUrl: response.message.body.track.track_share_url,
        musicGenres: response.message.body.track.primary_genres.music_genre_list.map((item: any) => ({
          musicGenreId: item.music_genre.music_genre_id,
          musicGenreParentId: item.music_genre.music_genre_parent_id,
          musicGenreName: item.music_genre.music_genre_name,
          musicGenreNameExtended: item.music_genre.music_genre_name_extended,
          musicGenreVanity: item.music_genre.music_genre_vanity
        }))
      })
    }),
    fetchLyrics: builder.query({
      query: (trackId: number) => ({
        url: 'track.lyrics.get',
        params: {
          apikey: API_KEY,
          track_id: trackId
        }
      }),
      transformResponse: (response: FetchLyricsRawResponse): Lyrics => ({
        lyricsId: response.message.body.lyrics.lyrics_id,
        isExplicit: Boolean(response.message.body.lyrics.explicit),
        lyricsBody: response.message.body.lyrics.lyrics_body
      })
    })
  })
})

export const { useFetchTracksQuery, useFetchTrackByIdQuery, useFetchLyricsQuery } = tracksApi
