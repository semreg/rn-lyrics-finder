import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Screens } from '../common/constants/navigation'
import { BrowseTracksScreen } from '../screens/BrowseTracksScreen'
import { TrackDetailsScreen } from '../screens/TrackDetailsScreen'
// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export type BrowseTracksStackParamList = {
  [Screens.BROWSE_TRACKS_LIST]: undefined
  [Screens.BROWSE_TRACKS_DETAILS]: {
    trackId: number
    commontrackId: number
  }
}

const Stack = createStackNavigator<BrowseTracksStackParamList>()

const BrowseTracksStackScreens = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={Screens.BROWSE_TRACKS_LIST}
      component={BrowseTracksScreen}
      options={{
        title: 'Browse'
      }}
    />
    <Stack.Screen
      name={Screens.BROWSE_TRACKS_DETAILS}
      component={TrackDetailsScreen}
      options={{
        title: 'Details & Lyrics',
        headerBackTitle: 'Back'
      }}
    />
  </Stack.Navigator>
)

export default BrowseTracksStackScreens
