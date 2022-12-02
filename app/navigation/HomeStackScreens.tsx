import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import BottomTabs from './BottomTabs'
import { Stacks } from '../common/constants/navigation'

const Stack = createStackNavigator()

export const HomeStackScreens = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={Stacks.BOTTOM_TAB_STACK}
      component={BottomTabs}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
)

export default HomeStackScreens
