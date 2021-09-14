import React from 'react'
import {TouchableOpacity} from 'react-native'
import {AppButtonStyles as styles} from '@styles/ComponentStyles'
import {Label15Light} from './AppText'

interface Props {
  title: string
  onPress: () => void
  buttonContainerStyles?: any
  disabled?: boolean
}

function AppButton({
  title,
  onPress,
  buttonContainerStyles,
  disabled = false,
}: Props) {
  return (
    <TouchableOpacity
      style={[styles.container, buttonContainerStyles]}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}>
      <Label15Light>{title}</Label15Light>
    </TouchableOpacity>
  )
}

export default AppButton
