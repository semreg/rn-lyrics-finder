import React from 'react'
import { FlatList, Pressable, RefreshControl, Text, View } from 'react-native'

import styles from './TracksList.style'
import { Track } from '../../../services/tracks/tracksTypes'

interface Props {
  tracks: Track[]
  onTrackPress: (trackId: number, commontrackId: number) => void
  refetch: () => void
  isLoading: boolean
}

const TracksList: React.FC<Props> = ({ tracks, onTrackPress, refetch, isLoading }) => (
  <View style={styles.root}>
    <FlatList
      data={tracks}
      keyExtractor={(item) => String(item.trackId)}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Pressable onPress={() => onTrackPress(item.trackId, item.commontrackId)}>
            <Text style={styles.itemText}>
              {item.trackName} - {item.artistName}
            </Text>
          </Pressable>
        </View>
      )}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={refetch} />
      }
    />
  </View>
)

export default TracksList
