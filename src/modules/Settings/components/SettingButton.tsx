import React from 'react'
import {TouchableOpacity} from 'react-native'

import {SettingButtonStyles as styles} from '@styles/SettingScreenStyles'
import {Label14} from '@components/AppText'

export default function SettingButton({renderIcon, name, onPress}) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {renderIcon()}
      <Label14 style={styles.name}>{name}</Label14>
    </TouchableOpacity>
  )
}
