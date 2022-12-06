import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  root: {
    borderRadius: 5,
    paddingHorizontal: 15
    // flex: 1
  },
  list: {
    height: '100%'
  },
  itemContainer: {
    height: 60,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#969595',
    // justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5
  },
  itemTrackInfo: {
    flex: 3,
    justifyContent: 'center'
  },
  itemFavoritesButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  itemText: {
    fontSize: 16,
    color: 'black'
  }
})
