import React from 'react'
import { View } from 'react-native'
import styles from './BrowseTracks.style'
import { Track } from '../../services/tracks/tracksTypes'
import { TrackList } from '../../common/components'

interface PropTypes {
  tracks: Track[]
  favoritesIds: number[]
  onTrackPress: (trackId: number, commontrackId: number) => void
  onAddToFavoritesPress: (track: Track) => void
  refetch: () => void
  isLoading: boolean
}

const BrowseTracksView: React.FC<PropTypes> = ({
  tracks,
  onTrackPress,
  refetch,
  isLoading,
  favoritesIds,
  onAddToFavoritesPress
}) => (
  <View style={styles.root}>
    <TrackList
      tracks={tracks}
      favoritesIds={favoritesIds}
      onTrackPress={onTrackPress}
      onAddToFavoritesPress={onAddToFavoritesPress}
      refetch={refetch}
      isLoading={isLoading}
    />
  </View>
)

export default BrowseTracksView
