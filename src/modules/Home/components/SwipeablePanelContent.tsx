import {Label12} from '@components/AppText'
import React from 'react'
import {View} from 'react-native'

function SwipeablePanelContent({description}) {
  return (
    <View style={{paddingHorizontal: 20, width: '100%', paddingTop: 15}}>
      <Label12 style={{lineHeight: 20}}>{description}</Label12>
    </View>
  )
}

export default SwipeablePanelContent
