import React from 'react'
import BrowseTracksView from './BrowseTracks.view'
import { navigate } from '../../navigation/navigationRef'
import { Screens } from '../../common/constants/navigation'
import { Loader } from '../../common/components'
import { useSelector } from 'react-redux'
import { selectFavoriteTracksIds, addTrack, removeTrack } from '../../redux/favoritesSlice'
import { Track } from '../../services/tracks/tracksTypes'
import { useAppDispatch } from '../../redux/hooks'
import { checkIfTrackInFavorites } from '../../common/helpers/favorites'
import { useFetchTracksQuery } from '../../services/tracks/tracksApi'
import { Text } from 'react-native'

// import { tracksMock as tracks } from '../../mock/tracksMock'

const BrowseTracksContainer = () => {
  const { data: tracks = [], isLoading, isError, refetch } = useFetchTracksQuery(null)
  const favoritesIds = useSelector(selectFavoriteTracksIds)
  const dispatch = useAppDispatch()

  const onTrackPress = (trackId: number, commontrackId: number) => {
    navigate(Screens.BROWSE_TRACKS_DETAILS, { trackId, commontrackId })
  }

  const onAddToFavoritesPress = (track: Track) => {
    const isTrackInFavorites = checkIfTrackInFavorites(track.trackId, favoritesIds)

    if (!isTrackInFavorites) {
      dispatch(addTrack(track))
    } else {
      dispatch(removeTrack(track.trackId))
    }
  }

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <Text>Error</Text>
  }

  return (
    <BrowseTracksView
      tracks={tracks}
      favoritesIds={favoritesIds}
      onTrackPress={onTrackPress}
      onAddToFavoritesPress={onAddToFavoritesPress}
      refetch={refetch}
      isLoading={false}
    />
  )
}

export default BrowseTracksContainer
