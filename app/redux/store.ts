import { configureStore } from '@reduxjs/toolkit'
import createDebugger from 'redux-flipper'

import favoritesReducer from './favoritesSlice'

import { tracksApi } from '../services/tracks/tracksApi'

export const store = configureStore({
  devTools: true,
  reducer: {
    favorites: favoritesReducer,
    [tracksApi.reducerPath]: tracksApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(createDebugger())
      .concat(tracksApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
