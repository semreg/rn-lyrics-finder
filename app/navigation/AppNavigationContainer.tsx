import React from 'react'
import { StatusBar } from 'react-native'
import { Colors } from '../common/constants/colors'
import { NavigationContainer } from '@react-navigation/native'
import { Stacks } from '../common/constants/navigation'
import HomeStackScreens from './HomeStackScreens'
import { createStackNavigator } from '@react-navigation/stack'
import { navigationRef } from './navigationRef'

const RootStack = createStackNavigator()

const AppNavigationContainer = () => {
  return (
    <>
      <StatusBar
        backgroundColor={Colors.WHITE_TRANSLUCENT}
        translucent barStyle={'dark-content'}
      />
      <NavigationContainer ref={navigationRef}>
        <RootStack.Navigator>
          <RootStack.Screen
            name={Stacks.HOME_STACK}
            component={HomeStackScreens}
            options={{ headerShown: false }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default AppNavigationContainer
