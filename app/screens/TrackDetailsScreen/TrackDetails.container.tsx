import React, { useEffect } from 'react'
import TrackDetailsView from './TrackDetails.view'
import { NativeStackScreenProps } from 'react-native-screens/native-stack'
import { BrowseTracksStackParamList } from '../../navigation/BrowseTracksStackScreens'
import { Screens } from '../../common/constants/navigation'
// import { trackDetailsMock } from '../../mock/trackDetails'
// import { trackLyricsMock } from '../../mock/trackLyricsMock'
import { useFetchTrackByIdQuery, useFetchLyricsQuery } from '../../services/tracks/tracksApi'
import { Text } from 'react-native'
import { Loader } from '../../common/components'

type Props = NativeStackScreenProps<BrowseTracksStackParamList, Screens.BROWSE_TRACKS_DETAILS>

const TrackDetailsContainer: React.FC<Props> = ({ route: { params }, navigation }) => {
  const {
    data: details,
    isLoading: isTrackDetailsLoading,
    error: detailsError
  } = useFetchTrackByIdQuery(params.commontrackId)
  const {
    data: lyrics,
    isLoading: isLyricsLoading,
    error: lyricsError
  } = useFetchLyricsQuery(params.trackId)

  useEffect(() => {
    if (details?.trackName) {
      // @ts-ignore
      navigation.setOptions({ title: details.trackName })
    }
  }, [details?.trackName])

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
