import React from 'react'
import {TouchableOpacity, ViewStyle} from 'react-native'

import {CardStyles as styles} from '@styles/ComponentStyles'

interface Props {
  cardStyles?: ViewStyle
  onPress?: () => void
  disabled?: boolean
  children?: React.ReactNode
}
const Card = ({cardStyles, disabled, onPress, children}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.cardContainer, cardStyles]}
      disabled={disabled}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  )
}

export default Card
