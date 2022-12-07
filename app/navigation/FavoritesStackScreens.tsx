import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Screens } from '../common/constants/navigation'
import { FavoritesScreen } from '../screens/FavoritesScreen'
import { TrackDetailsScreen } from '../screens/TrackDetailsScreen'

export enum TrackDetailsMode {
  // eslint-disable-next-line no-unused-vars
  FAVORITES,
  // eslint-disable-next-line no-unused-vars
  BROWSE
}

export type FavoritesStackParamsList = {
  [Screens.FAVORITES]: undefined
  [Screens.FAVORITES_TRACK_DETAILS]: {
    trackId: number
    commontrackId: number
    mode: TrackDetailsMode
  }
}

const Stack = createStackNavigator<FavoritesStackParamsList>()

const FavoritesStackScreens = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={Screens.FAVORITES}
      component={FavoritesScreen}
      options={{
        title: 'Favorite tracks'
      }}
    />
    <Stack.Screen
      name={Screens.FAVORITES_TRACK_DETAILS}
      component={TrackDetailsScreen}
      options={{
        title: 'Favorite track info',
        headerBackTitle: 'Back'
      }}
    />
  </Stack.Navigator>
)

export default FavoritesStackScreens
