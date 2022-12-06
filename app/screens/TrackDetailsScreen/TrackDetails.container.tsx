import React, { useEffect, useMemo } from 'react'
import TrackDetailsView from './TrackDetails.view'
import { useFetchTrackByIdQuery, useFetchLyricsQuery } from '../../services/tracks/tracksApi'
import { Alert, Text } from 'react-native'
import { goBack } from '../../navigation/navigationRef'
import { checkIfTrackInFavorites } from '../../common/helpers/favorites'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { addTrack, removeTrack, selectFavoriteTracksIds } from '../../redux/favoritesSlice'
import { HeaderFavoriteButton, Loader } from '../../common/components'
import { TrackDetailsMode } from '../../navigation/FavoritesStackScreens'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'

type TrackDetailsParams = {
  trackId: number
  commontrackId: number
  mode?: TrackDetailsMode
}

const TrackDetailsContainer = () => {
  const route = useRoute<RouteProp<{ params: TrackDetailsParams }, 'params'>>()
  const navigation = useNavigation()
  const dispatch = useAppDispatch()

  const {
    data: details,
    isLoading: isTrackDetailsLoading,
    error: detailsError
  } = useFetchTrackByIdQuery(route.params.commontrackId)
  const {
    data: lyrics,
    isLoading: isLyricsLoading,
    error: lyricsError
  } = useFetchLyricsQuery(route.params.trackId)

  const favoritesIds = useAppSelector(selectFavoriteTracksIds)

  const isInFavorites = useMemo(() =>
    checkIfTrackInFavorites(details?.trackId, favoritesIds),
  [details?.trackId, favoritesIds]
  )

  useEffect(() => {
    if (details?.trackName) {
      // @ts-ignore
      navigation.setOptions({ title: details.trackName })
    }
  }, [details?.trackName])

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderFavoriteButton
          details={details}
          isInFavorites={isInFavorites}
          onAdd={() => dispatch(addTrack(details))}
          onRemove={() => dispatch(removeTrack(details?.trackId))}
          onRemoveCallback={() => {
            // If we are inside favorites stack, navigate backwards
            if (route.params.mode === TrackDetailsMode.FAVORITES) {
              goBack()
            }
          }}
        />
      )
    })
  }, [navigation, isInFavorites, details])

  useEffect(() => {
    if (detailsError || lyricsError) {
      Alert.alert('Unable to load this track.', 'Please try again later.')

      goBack()
    }
  }, [detailsError, lyricsError])

  if (isLyricsLoading || isTrackDetailsLoading) {
    return <Loader />
  }

  if (detailsError || lyricsError) {
    return <Text>Error</Text>
  }

  return (
    <TrackDetailsView
      trackDetails={details}
      trackLyrics={lyrics}
    />
  )
}

export default TrackDetailsContainer
