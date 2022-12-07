import React from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'

type Props = {
  onButtonPress: () => void
}

const SelectFiltersModalView: React.FC<Props> = ({
  onButtonPress
}) => {
  return (
    <View style={styles.root}>
      <Text style={{ fontSize: 30 }}>Filters!</Text>
      <Button onPress={onButtonPress} title='Dismiss' />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 0
  }
})

export default SelectFiltersModalView
