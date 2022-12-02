import React from 'react'
import BrowseTracksView from './BrowseTracks.view'
import { useFetchTracksQuery } from '../../services/tracks/tracksApi'
import { Text } from 'react-native'
import { navigate } from '../../navigation/navigationRef'
import { Screens } from '../../common/constants/navigation'
import { Loader } from '../../common/components'

const BrowseTracksContainer = () => {
  const { data: tracks = [], isLoading, isError, refetch } = useFetchTracksQuery(null)

  const onTrackPress = (trackId: number, commontrackId: number) => {
    navigate(Screens.BROWSE_TRACKS_DETAILS, { trackId, commontrackId })
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
      onTrackPress={onTrackPress}
      refetch={refetch}
      isLoading={isLoading}
    />
  )
}

export default BrowseTracksContainer
