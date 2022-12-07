import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Screens } from '../common/constants/navigation'
import { BrowseTracksScreen } from '../screens/BrowseTracksScreen'
import { TrackDetailsScreen } from '../screens/TrackDetailsScreen'
import { SelectFiltersModalScreen } from '../screens/SelectFiltersModalScreen'

export type BrowseTracksStackParamsList = {
  [Screens.BROWSE_TRACKS_LIST]: undefined
  [Screens.BROWSE_TRACKS_DETAILS]: {
    trackId: number
    commontrackId: number
  }
  [Screens.BROWSE_TRACKS_FILTERS_MODAL]: undefined
}

const Stack = createStackNavigator<BrowseTracksStackParamsList>()

const DetailsHeaderRight = () => (
  <Icon
    name='cards-heart-outline'
    size={27}
    color='#45484a'
    style={{
      alignSelf: 'center'
      // justifySelf: 'center'
    }}
  />
)

const BrowseTracksStackScreens = () => (
  <Stack.Navigator>
    <Stack.Group>
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
          headerBackTitle: 'Back',
          headerRight: DetailsHeaderRight
        }}
      />
    </Stack.Group>
    <Stack.Group>
      <Stack.Screen
        name={Screens.BROWSE_TRACKS_FILTERS_MODAL}
        options={{
          presentation: 'modal',
          headerShown: false
        }}
        component={SelectFiltersModalScreen}
      />
    </Stack.Group>
  </Stack.Navigator>
)

export default BrowseTracksStackScreens
