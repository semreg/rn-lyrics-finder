import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { BrowseTracksScreen } from '../screens/BrowseTracksScreen'
import { FavoritesScreen } from '../screens/FavoritesScreen'

const Tab = createBottomTabNavigator()

const Navigation = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name='Track List' component={BrowseTracksScreen} />
      <Tab.Screen name='Favorites' component={FavoritesScreen} />
    </Tab.Navigator>
  </NavigationContainer>
)

export default Navigation
