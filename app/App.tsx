import React from 'react'
import {
  SafeAreaView,
  StatusBar
} from 'react-native'

import Navigation from './navigation'

const App = () => {
  return (
    <>
       <SafeAreaView style={{ backgroundColor: '#fff' }}>
        <StatusBar
          barStyle={'dark-content'}
        />
       </SafeAreaView>
      <Navigation />
    </>
  )
}

export default App
