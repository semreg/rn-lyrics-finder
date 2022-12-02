import { configureStore } from '@reduxjs/toolkit'
import createDebugger from 'redux-flipper'

import tracksReducer from './tracksSlice'
import { tracksApi } from '../services/tracks/tracksApi'

export const store = configureStore({
  devTools: true,
  reducer: {
    tracks: tracksReducer,
    [tracksApi.reducerPath]: tracksApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(createDebugger())
      .concat(tracksApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
