import React from 'react'
import {Text, View} from 'react-native'
import {AntDesign} from '@expo/vector-icons'

import {Label16} from '@components/AppText'
import {AppHeaderStyles as styles} from '@styles/ComponentStyles'
import NavigationService from './NavigationService'

interface Props {
  onPress?: () => void
  title: string
}
export default function AppHeader({onPress, title}: Props) {
  return (
    <View style={styles.container}>
      <AntDesign
        name="arrowleft"
        size={24}
        color="white"
        onPress={() => {
          if (onPress) {
            onPress()
          } else {
            NavigationService.goBack()
          }
        }}
      />
      <Label16 style={{fontWeight: '700'}}>{title}</Label16>
      <View></View>
    </View>
  )
}
