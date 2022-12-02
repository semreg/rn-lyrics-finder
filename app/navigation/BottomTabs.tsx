import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FavoritesScreen } from '../screens/FavoritesScreen'
import { Stacks } from '../common/constants/navigation'
import BrowseTracksStackScreens from './BrowseTracksStackScreens'
// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FavoritesStackScreens from './FavoritesStackScreens'

const Tab = createBottomTabNavigator()

const BottomTabs = () => (
  <Tab.Navigator>
    <Tab.Screen
      name={Stacks.BROWSE_TRACKS_STACK}
      component={BrowseTracksStackScreens}
      options={{
        tabBarLabel: 'Tracks',
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Icon name="album" size={size} color={color} />
        )
      }}
    />
    <Tab.Screen
      name={Stacks.FAVORITES_STACK}
      component={FavoritesStackScreens}
      options={{
        tabBarLabel: 'Favorites',
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Icon name="heart" size={size} color={color} />
        )
      }}
    />
  </Tab.Navigator>
)

export default BottomTabs
