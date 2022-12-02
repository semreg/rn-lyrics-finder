import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'

export type Track = {
  id: string,
  name: string
}

type SliceState = {
  list: Array<Track>
}

const initialState: SliceState = { list: [] }

export const tracksSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {
    setTracks: (state, action) => {
      state.list = action.payload
    },

    clearTracks: (state) => {
      state.list = []
    }
  }
})

export const { setTracks, clearTracks } = tracksSlice.actions

export const selectTracksList = (state: RootState) => state.tracks.list

export default tracksSlice.reducer
