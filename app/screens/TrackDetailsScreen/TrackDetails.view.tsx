import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import styles from './TrackDetails.style'
import { Lyrics, TrackDetails } from '../../services/tracks/tracksTypes'
import { Separator } from '../../common/components'

interface PropTypes {
  trackDetails?: TrackDetails
  trackLyrics?: Lyrics
}

const TrackDetailsView: React.FC<PropTypes> = ({ trackDetails, trackLyrics }) => (
  <ScrollView style={styles.root}>
    {trackLyrics && (
      <View style={[styles.detailsCard, styles.lyrics]}>
        <Text style={styles.heading}>
          Lyrics
        </Text>
        <Separator />
        <Text style={styles.lyricsText}>
          {trackLyrics.lyricsBody ? trackLyrics.lyricsBody : 'No lyrics found :('}
        </Text>
      </View>
    )}
    <Separator isVisible={false}/>
    {trackDetails && (
      <View style={styles.detailsCard}>
        <Text style={styles.heading}>
          Details
        </Text>
        <Separator />
        <View style={styles.trackDetailsContainer}>
          <Text style={styles.detailItem}>By  {trackDetails.artistName}</Text>
          <Text style={styles.detailItem}>Album:  {trackDetails.albumName}</Text>
        </View>
        <View>
          {trackDetails.musicGenres.length > 0 && (
            <Text style={styles.detailItem}>Genres: {trackDetails.musicGenres.map(genre => (
              <Text style={styles.genreItem} key={genre.musicGenreId}>{genre.musicGenreName}</Text>
            ))}
            </Text>
          )}
        </View>
      </View>
    )}
  </ScrollView>
)

export default TrackDetailsView
