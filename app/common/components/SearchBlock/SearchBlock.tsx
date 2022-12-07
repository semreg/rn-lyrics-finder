import React from 'react'
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import { navigationRef } from '../../../navigation/navigationRef'
import { Screens } from '../../constants/navigation'

type Props = {}

const SearchBlock: React.FC<Props> = () => {
  const onFilterButtonPress = () => {
    navigationRef.navigate(Screens.BROWSE_TRACKS_FILTERS_MODAL)
  }

  return (
    <View style={styles.root}>
      <Icon
        style={styles.searchIcon}
        name='ios-search'
        size={19}
        color={'#989696'}
      />
      <TextInput
        style={styles.input}
        placeholderTextColor={'#989696'}
        placeholder='Search'
      />
      <TouchableOpacity
        onPress={onFilterButtonPress}
        style={styles.filterButton}
      >
        <Icon color='white' name={'ios-filter'} size={22} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    marginVertical: 20,
    flexDirection: 'row'
  },
  searchIcon: {
    position: 'absolute',
    top: 8,
    left: 5,
    zIndex: 2
  },
  filterButton: {
    backgroundColor: '#007aff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    borderRadius: 6,
    flex: 1
  },
  input: {
    backgroundColor: '#e5e5e5',
    paddingHorizontal: 15,
    paddingLeft: 25,
    height: 35,
    color: '#3c3c3f',
    fontSize: 16,
    borderRadius: 6,
    zIndex: 1,
    flex: 10,
    marginRight: 7
  },
  searchTitle: {
    fontSize: 50,
    color: 'black',
    fontWeight: 'bold'
  }
})

export default SearchBlock
