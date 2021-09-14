import React from 'react'
import {View} from 'react-native'

import {ChangeLanguageStyles as styles} from '@styles/SettingScreenStyles'
import AppHeader from '@navigation/AppHeader'

export default function ChangeLanguageScreen() {
  return (
    <View style={styles.wrapper}>
      <AppHeader title="Change Language" />
    </View>
  )
}
