import React from 'react'
import {AntDesign} from '@expo/vector-icons'
import {View} from 'react-native'

import theme from '@config/theme'
import {RatingStyles as styles} from '@styles/HomeScreenStyles'
import {getFontSize} from '@components/AppText'

const Rating = ({rating}: {rating: Number}) => {
  return (
    <View style={styles.container}>
      {[1, 2, 3, 4, 5].map((val, index) => {
        return index < rating ? (
          <AntDesign
            name="star"
            size={getFontSize(9)}
            color={theme.custom.orange}
            style={styles.icon}
          />
        ) : (
          <AntDesign
            name="staro"
            size={getFontSize(9)}
            color={theme.custom.medium_grey}
            style={styles.icon}
          />
        )
      })}
    </View>
  )
}

export default Rating
