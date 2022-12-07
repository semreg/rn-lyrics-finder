import React from 'react'
import {
  FlatList,
  RefreshControl,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './TracksList.style'
import { Track } from '../../../services/tracks/tracksTypes'
import { checkIfTrackInFavorites } from '../../helpers/favorites'
import { SearchBlock } from '../SearchBlock'

interface TrackListProps {
  tracks: Track[]
  onTrackPress: (trackId: number, commontrackId: number) => void
  onAddToFavoritesPress: (track: Track) => void
  refetch?: () => void
  isLoading?: boolean
  favoritesIds: number[]
  doShowSearch?: boolean
}

interface TrackListItemProps {
  onTrackPress: (trackId: number, commontrackId: number) => void
  onAddToFavoritesPress: (track: Track) => void
  track: Track
  favoritesIds: number[]
}

const TrackListItem: React.FC<TrackListItemProps> = ({
  onTrackPress,
  onAddToFavoritesPress,
  track,
  favoritesIds
}) => {
  const isTrackInFavorites = checkIfTrackInFavorites(
    track.trackId,
    favoritesIds
  )

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={styles.itemTrackInfo}
        onPress={() =>
          onTrackPress(track.trackId, track.commontrackId)
        }
      >
        <Text style={styles.itemText}>
          {track.trackName} - {track.artistName}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.itemFavoritesButton}
        onPress={() => onAddToFavoritesPress(track)}
      >
        <Icon
          name={`cards-heart${!isTrackInFavorites ? '-outline' : ''}`}
          size={30}
          color={isTrackInFavorites ? '#FF2D55' : '#45484a'}
        />
      </TouchableOpacity>
    </View>
  )
}

const TracksList: React.FC<TrackListProps> = ({
  tracks,
  onTrackPress,
  refetch,
  isLoading,
  favoritesIds,
  onAddToFavoritesPress,
  doShowSearch = true
}) => (
  <View style={styles.root}>
    <FlatList
      // Do not include search if we are in favorites
      ListHeaderComponent={doShowSearch ? SearchBlock : null}
      ListHeaderComponentStyle={{ padding: 0, margin: 0 }}
      style={styles.list}
      data={tracks}
      keyExtractor={(item) => String(item.trackId)}
      renderItem={({ item }) => (
        <TrackListItem
          onTrackPress={onTrackPress}
          onAddToFavoritesPress={onAddToFavoritesPress}
          track={item}
          favoritesIds={favoritesIds}
        />
      )}
      refreshControl={
        refetch && (
          <RefreshControl
            refreshing={Boolean(isLoading)}
            onRefresh={refetch}
          />
        )
      }
    />
  </View>
)

export default TracksList
