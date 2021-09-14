import React from 'react'
import {View, ViewStyle} from 'react-native'
import {AntDesign, Ionicons} from '@expo/vector-icons'

import {RecipeVerticalCardStyles as styles} from '@styles/HomeScreenStyles'
import theme from '@config/theme'
import {Label8Light} from '@components/AppText'
import {getFontSize} from '@components/AppText'

interface Props {
  title: string
  isClock?: boolean
  containerStyles?: ViewStyle
}
const IconComponent = ({title, isClock, containerStyles}: Props) => {
  return isClock ? (
    <View style={[styles.row, containerStyles]}>
      <AntDesign
        name="clockcircleo"
        color={theme.custom.medium_grey}
        size={getFontSize(12)}
      />
      <Label8Light style={{color: theme.custom.medium_grey, left: 5}}>
        {title}
      </Label8Light>
    </View>
  ) : (
    <View style={[styles.row, containerStyles]}>
      <Ionicons
        name="fast-food-outline"
        color={theme.custom.medium_grey}
        size={getFontSize(12)}
      />
      <Label8Light style={{color: theme.custom.medium_grey, left: 5}}>
        {title}
      </Label8Light>
    </View>
  )
}

export default IconComponent
