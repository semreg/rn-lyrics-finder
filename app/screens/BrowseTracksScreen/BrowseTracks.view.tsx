import React from 'react'
import { View } from 'react-native'
import styles from './BrowseTracks.style'
import { Track } from '../../services/tracks/tracksTypes'
import { TrackList } from '../../common/components'

interface PropTypes {
  tracks: Track[]
  onTrackPress: (trackId: number, commontrackId: number) => void
  refetch: () => void
  isLoading: boolean
}

const BrowseTracksView: React.FC<PropTypes> = ({ tracks, onTrackPress, refetch, isLoading }) => (
  <View style={styles.root}>
    <TrackList
      tracks={tracks}
      onTrackPress={onTrackPress}
      refetch={refetch}
      isLoading={isLoading}
    />
  </View>
)

export default BrowseTracksView
