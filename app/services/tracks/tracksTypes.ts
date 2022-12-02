export type Track = {
  trackId: number
  commontrackId: number
  trackName: string
  artistName: string
}

type MusicGenre = {
  musicGenreId: number
  musicGenreParentId: number
  musicGenreName: string
  musicGenreNameExtended: string
  musicGenreVanity: string
}

export type TrackDetails = Track & {
  albumName: string
  trackShareUrl: string
  musicGenres: MusicGenre[]
}

export type Lyrics = {
  lyricsId: number,
  isExplicit: boolean
  lyricsBody: string
}

export type FetchTracksRawResponse = {
  message: {
    header: {
      status_code: number
      execute_time: number
    }
    body: {
      track_list: any[]
    }
  }
}

export type FetchTrackByIdRawResponse = {
  message: {
    header: {
      status_code: number
      execute_time: number
    }
    body: {
      track: any
    }
  }
}

export type FetchLyricsRawResponse = {
  message: {
    header: {
      status_code: number
      execute_time: number
    }
    body: {
      lyrics: any
    }
  }
}
