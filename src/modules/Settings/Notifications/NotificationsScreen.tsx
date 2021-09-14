import React from 'react'
import {View} from 'react-native'
import {NotificationsStyles as styles} from '@styles/SettingScreenStyles'
import AppHeader from '@navigation/AppHeader'

export default function NotificationsScreen() {
  return (
    <View style={styles.wrapper}>
      <AppHeader title={'Notificatons'} />
    </View>
  )
}
