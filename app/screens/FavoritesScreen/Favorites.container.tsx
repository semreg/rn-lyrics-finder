import React from 'react'
import { useSelector } from 'react-redux'
import { Alert, Text, View } from 'react-native'

import FavoritesView from './Favorites.view'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import {
  removeTrack,
  selectFavoriteTracks,
  selectFavoriteTracksIds
} from '../../redux/favoritesSlice'
import { navigate } from '../../navigation/navigationRef'
import { Screens } from '../../common/constants/navigation'
import { Track } from '../../services/tracks/tracksTypes'
import { TrackDetailsMode } from '../../navigation/FavoritesStackScreens'

const FavoritesContainer = () => {
  const favoriteTracks = useAppSelector(selectFavoriteTracks)
  const favoritesIds = useSelector(selectFavoriteTracksIds)
  const dispatch = useAppDispatch()

  const onTrackPress = (trackId: number, commontrackId: number) => {
    navigate(Screens.FAVORITES_TRACK_DETAILS, {
      trackId,
      commontrackId,
      mode: TrackDetailsMode.FAVORITES
    })
  }

  const onAddToFavoritesPress = (track: Track) => {
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
            dispatch(removeTrack(track.trackId))
          }
        }
      ]
    )
  }

  if (favoriteTracks.length < 1) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center'
        }}
      >
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            fontSize: 16
          }}
        >
          No favorites yet 🥺
        </Text>
      </View>
    )
  }

  return (
    <FavoritesView
      favoriteTracks={favoriteTracks}
      favoritesIds={favoritesIds}
      onTrackPress={onTrackPress}
      onAddToFavoritesPress={onAddToFavoritesPress}
    />
  )
}

export default FavoritesContainer
