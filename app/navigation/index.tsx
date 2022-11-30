import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { TrackListScreen } from '../screens/TrackListScreen'
import { FavoritesScreen } from '../screens/FavoritesScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

const Navigation = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Track List" component={TrackListScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  </NavigationContainer>
)

export default Navigation
