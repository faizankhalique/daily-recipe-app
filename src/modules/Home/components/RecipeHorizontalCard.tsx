import React from 'react'
import {View, Image, TouchableOpacity} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import {RecipeHorizontalCardStyles as styles} from '@styles/HomeScreenStyles'
import theme from '@config/theme'
import {getFontSize} from '@components/AppText'
import {Label9Light, Label13} from '@components/AppText'
import Rating from './Rating'
import IconComponent from './IconComponent'
import {getImageUrl} from '@helpers/utilHelper'

interface Props {
  recipe: {
    _id: string
    name: string
    category: string
    isLiked: boolean
    calories: string
    time: string
    image: any
    rating: number
  }
  onPress?: () => void
}
function RecipeHorizontalCard({recipe, onPress}: Props) {
  const {_id, name, category, isLiked, calories, time, image, rating} = recipe
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        source={{
          uri: getImageUrl(image),
        }}
        style={styles.image}
        resizeMode={'contain'}
      />
      <View style={styles.container}>
        <View style={styles.row}>
          <Label9Light numberOfLines={1} style={{color: '#128FAE'}}>
            {category}
          </Label9Light>
          <MaterialCommunityIcons
            name={isLiked ? 'heart' : 'heart-outline'}
            style={{
              color: isLiked ? theme.custom.orange : theme.custom.medium_grey,
              fontSize: getFontSize(22),
            }}
          />
        </View>
        <Label13
          numberOfLines={1}
          style={{fontWeight: '700', marginVertical: 1}}>
          {name}
        </Label13>
        <Rating rating={rating} />
        <Label9Light style={{color: theme.custom.orange}}>
          {calories} Calories
        </Label9Light>
        <View style={styles.bottomContainer}>
          <IconComponent title={time} isClock />
          <IconComponent title={'1 Serving'} isClock={false} />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RecipeHorizontalCard
