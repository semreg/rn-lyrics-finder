import { createSelector, createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'
import { Track } from '../services/tracks/tracksTypes'

type SliceState = {
  tracks: Array<Track>
}

const initialState: SliceState = { tracks: [] }

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addTrack: (state, { payload: track }) => {
      state.tracks.push(track)
    },
    removeTrack: (state, { payload: trackId }) => {
      state.tracks = state.tracks.filter(currentTrack =>
        currentTrack.trackId !== trackId
      )
    }
  }
})

export const { addTrack, removeTrack } = favoritesSlice.actions

export const selectFavoriteTracks = (state: RootState) => state.favorites.tracks

export const selectFavoriteTracksIds = createSelector(
  selectFavoriteTracks,
  favoriteTracks => favoriteTracks.map(track => track.trackId)
)

export default favoritesSlice.reducer
