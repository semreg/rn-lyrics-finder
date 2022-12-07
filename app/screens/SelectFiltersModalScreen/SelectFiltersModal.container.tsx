import React from 'react'

import SelectFiltersModalView from './SelectFiltersModal.view'
import { goBack } from '../../navigation/navigationRef'

const SelectFiltersModalContainer = () => {
  const onButtonPress = () => {
    goBack()
  }

  return <SelectFiltersModalView onButtonPress={onButtonPress} />
}

export default SelectFiltersModalContainer
