export const checkIfTrackInFavorites = (trackId?: number, favoritesIds?: number[]) =>
  trackId && favoritesIds
    ? favoritesIds.reduce((acc) =>
      favoritesIds.includes(trackId) ? true : acc, false)
    : false
