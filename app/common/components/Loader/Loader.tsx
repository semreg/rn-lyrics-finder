import React from 'react'
import { ActivityIndicator, Platform, StyleSheet, View } from 'react-native'

const Loader = () => (
  <View style={styles.root}>
    <ActivityIndicator size={'large'} color={Platform.OS === 'android' ? '#007AFF' : ''} />
  </View>
)

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  }
})

export default Loader
