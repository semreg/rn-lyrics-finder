import React from 'react'
import { StyleSheet, View } from 'react-native'

interface PropTypes {
  isVisible?: boolean
}

const Separator: React.FC<PropTypes> = ({ isVisible = true }) =>
  <View style={[styles.root, isVisible && styles.visible]} />

const styles = StyleSheet.create({
  root: {
    height: 0.5,
    marginVertical: 10
  },
  visible: {
    backgroundColor: '#b2b2b2'
  }
})

export default Separator
