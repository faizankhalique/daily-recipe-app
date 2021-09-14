import React, {useState, useEffect} from 'react'
import {Image, FlatList, Text, View, TouchableOpacity} from 'react-native'
import {useQuery, useMutation} from 'react-query'

import {RecipeDetailsScreenStyles as styles} from '@styles/HomeScreenStyles'
import AppHeader from '@navigation/AppHeader'
import {Label11Light, Label16, Label17} from '@components/AppText'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {getFontSize} from '@components/AppText'
import theme from '@config/theme'
import Rating from './Rating'
import IconComponent from './IconComponent'
import SwipeablePanelContent from './SwipeablePanelContent'
import SwipeAblePanel from '@components/SwipeAblePanel'
import {axiosInstance} from '@api/axios'

import {getImageUrl} from '@helpers/utilHelper'
import AppSpinner from '@components/AppSpinner'

interface Recipe {
  id: number
  name: string
  category: string
  isLiked: boolean
  calories: string
  deliveryTime: string
  image: any
  rating: number
  ingredients: any
}
export default function RecipeDetailsScreen(props) {
  const {id} = props.route.params
  const getHomeRecipes = ({queryKey}) =>
    axiosInstance.get('/recipe/' + queryKey[1].recipeId)
  const {mutate} = useMutation((recipe_: any) =>
    axiosInstance.put('/like_recipe', recipe_),
  )
  const {mutate: addRecentlyViewedRecipe} = useMutation((recipe_: any) =>
    axiosInstance.put('/add_recently_viewed_recipe', recipe_),
  )
  const {data: recipe, isLoading} = useQuery<any>(
    ['recipesDetails', {recipeId: id}],
    getHomeRecipes,
    {
      onSuccess: (data) => {
        addRecentlyViewedRecipe({recipe: data._id})
      },
    },
  )
  const [isPanelActive, setIsPanelActive] = useState(false)
  const [isLiked, setIsLiked] = useState(recipe?.isLiked)
  useEffect(() => {
    setIsLiked(recipe?.isLiked)
  }, [recipe?.isLiked])
  const handleLikePress = () => {
    mutate({
      recipe: recipe._id,
      isLiked: !isLiked,
    })
    setIsLiked(!isLiked)
  }
  return (
    <>
      <View style={styles.wrapper}>
        {recipe && (
          <>
            <AppHeader title="Recipe details" />
            <View style={styles.container}>
              <Label11Light
                numberOfLines={1}
                style={{color: '#128FAE', marginVertical: 2}}>
                {recipe.category}
              </Label11Light>
              <View style={styles.titleContainer}>
                <Label17
                  numberOfLines={2}
                  style={{fontWeight: '700', marginVertical: 2}}>
                  {recipe.name}
                </Label17>
                <MaterialCommunityIcons
                  name={isLiked ? 'heart' : 'heart-outline'}
                  style={{
                    color: isLiked
                      ? theme.custom.orange
                      : theme.custom.medium_grey,
                    fontSize: getFontSize(22),
                  }}
                  onPress={handleLikePress}
                />
              </View>

              <Label11Light
                style={{color: theme.custom.orange, marginVertical: 6}}>
                {recipe.calories} Calories
              </Label11Light>
              <Rating rating={recipe.rating} />
              <View style={styles.row}>
                <View>
                  <IconComponent
                    title={recipe.time}
                    isClock
                    containerStyles={styles.containerStyles}
                  />
                  <IconComponent
                    title={'1 Serving'}
                    isClock={false}
                    containerStyles={styles.containerStyles}
                  />
                </View>
                <Image
                  source={{uri: getImageUrl(recipe.image)}}
                  style={styles.image}
                  resizeMode="contain"
                />
              </View>
            </View>
            <View style={styles.listContainer}>
              <Label16 style={{fontWeight: '700'}}>Ingredients</Label16>
              <FlatList
                horizontal
                data={recipe.ingredients}
                keyExtractor={(item) => item._id}
                renderItem={({item}) => (
                  <Image
                    source={{uri: getImageUrl(item.image)}}
                    style={styles.ingredientImage}
                  />
                )}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingVertical: 10}}
              />
            </View>
          </>
        )}
      </View>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.bottomSwipeAblePanel}
        onPress={() => setIsPanelActive(true)}>
        <View style={styles.pinContainer} />
      </TouchableOpacity>
      <SwipeAblePanel
        isPanelActive={isPanelActive}
        closePanel={() => setIsPanelActive(false)}>
        <SwipeablePanelContent description={recipe?.description} />
      </SwipeAblePanel>
      <AppSpinner loading={isLoading} />
    </>
  )
}
