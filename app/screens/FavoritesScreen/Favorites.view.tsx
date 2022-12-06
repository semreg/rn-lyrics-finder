import React from 'react'
import { Track } from '../../services/tracks/tracksTypes'
import { TrackList } from '../../common/components'

type PropTypes = {
  favoriteTracks: Track[]
  favoritesIds: number[]
  onTrackPress: (trackId: number, commontrackId: number) => void
  onAddToFavoritesPress: (track: Track) => void
}

const FavoritesView: React.FC<PropTypes> = ({
  favoriteTracks,
  favoritesIds,
  onTrackPress,
  onAddToFavoritesPress
}) => (
  <TrackList
    tracks={favoriteTracks}
    onTrackPress={onTrackPress}
    onAddToFavoritesPress={onAddToFavoritesPress}
    favoritesIds={favoritesIds}
  />
)

export default FavoritesView
