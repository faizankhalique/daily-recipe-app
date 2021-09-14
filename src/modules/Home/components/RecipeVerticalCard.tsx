import React from 'react'
import {View, Image, TouchableOpacity} from 'react-native'
import {MaterialCommunityIcons, AntDesign} from '@expo/vector-icons'

import {RecipeVerticalCardStyles as styles} from '@styles/HomeScreenStyles'
import theme from '@config/theme'
import {getFontSize, Label13, Label9Light} from '@components/AppText'

import IconComponent from './IconComponent'

import Rating from './Rating'
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
    rating
  }
  onPress?: () => void
}

function RecipeVerticalCard({recipe, onPress}: Props) {
  const {_id, name, category, isLiked, calories, time, image, rating} = recipe
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <MaterialCommunityIcons
        name={isLiked ? 'heart' : 'heart-outline'}
        style={{
          color: isLiked ? theme.custom.orange : theme.custom.medium_grey,
          fontSize: getFontSize(22),
        }}
      />
      <Image
        source={{uri: getImageUrl(image)}}
        style={styles.image}
        resizeMode={'contain'}
      />
      <View style={styles.container}>
        <Label9Light numberOfLines={1} style={{color: '#128FAE'}}>
          {category}
        </Label9Light>
        <Label13
          numberOfLines={1}
          style={{fontWeight: '700', marginVertical: 2}}>
          {name}
        </Label13>
        <Rating rating={rating} />
        <Label9Light style={{color: theme.custom.orange}}>
          {calories} Calories
        </Label9Light>
      </View>
      <View style={styles.row1}>
        <IconComponent title={time} isClock />
        <IconComponent title={'1 Serving'} isClock={false} />
      </View>
    </TouchableOpacity>
  )
}

export default RecipeVerticalCard
