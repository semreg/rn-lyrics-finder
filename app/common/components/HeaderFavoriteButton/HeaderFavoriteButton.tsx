import React from 'react'
import { Alert, TouchableOpacity } from 'react-native'
// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { TrackDetails } from '../../../services/tracks/tracksTypes'

type Props = {
  details?: TrackDetails
  isInFavorites?: boolean
  onRemove: () => void
  onAdd: () => void
  onRemoveCallback?: () => void
}

const HeaderFavoriteButton: React.FC<Props> = ({
  details,
  isInFavorites,
  onRemove,
  onAdd,
  onRemoveCallback
}) => {
  const onFavoritePress = () => {
    if (details) {
      if (isInFavorites) {
        Alert.alert(
          'Are you sure you want to remove track from favorites?',
          undefined,
          [
            {
              text: 'Cancel',
              onPress: () => {},
              style: 'cancel'
            },
            {
              text: 'OK',
              onPress: () => {
                onRemove()
                onRemoveCallback && onRemoveCallback()
              }
            }
          ]
        )
      } else {
        onAdd()
      }
    }
  }

  return (
    <TouchableOpacity
      onPress={() => {
        // Alert.alert(String(Boolean(details)))

        onFavoritePress()
      }}
      style={{
        // alignSelf: 'center'
        marginRight: 25,
        flex: 1,
        justifyContent: 'center'
      }}
    >
      <Icon
        name={`cards-heart${!isInFavorites ? '-outline' : ''}`}
        size={27}
        color={isInFavorites ? '#FF2D55' : '#45484a'}
        style={{
          alignSelf: 'flex-end'
        }}
      />
    </TouchableOpacity>
  )
}

export default HeaderFavoriteButton
