import React, {useState, useEffect} from 'react'
import {View, FlatList} from 'react-native'
import {useQuery} from 'react-query'
import {useIsFocused} from '@react-navigation/native'

import {HomeScreenStyles as styles} from '@styles/HomeScreenStyles'
import {Label14Light, Label19} from '@components/AppText'
import AppTextInput from '@components/AppTextInput'
import RecipeVerticalCard from './components/RecipeVerticalCard'
import RecipeHorizontalCard from './components/RecipeHorizontalCard'
import AppSpinner from '@components/AppSpinner'
import NavigationService from '@navigation/NavigationService'
import {axiosInstance} from '@api/axios'
import {useSearch} from '@hooks/useSerach'

const searchKeys = ['name', 'category']
function HomeScreen() {
  const isFocused = useIsFocused()
  const getHomeRecipes = () => axiosInstance.get('/home_recipes')
  const {data, isLoading, refetch} = useQuery<any>(
    'homeRecipes',
    getHomeRecipes,
  )
  const [searchValue, setSearchValue] = useState('')
  useEffect(() => {
    if (isFocused) refetch()
  }, [isFocused])

  const {hits: freshRecipes} = useSearch(
    data.freshRecipes,
    searchValue,
    searchKeys,
  )
  const {hits: recommendedRecipes} = useSearch(
    data.recommendedRecipes,
    searchValue,
    searchKeys,
  )
  const handleAllSeePress = (title, key) => {
    NavigationService.navigate('SeeAllRecipes', {
      title,
      key,
    })
  }
  if (!data) return null
  return (
    <View style={styles.wrapper}>
      <Label19 style={styles.title}>What would you like to cook today?</Label19>
      <View style={styles.searchContainer}>
        <AppTextInput
          placeholder={'Search for recipes'}
          value={searchValue}
          onChangeText={(val) => setSearchValue(val)}
          isSearch
          textInputContainerStyle={styles.textInputContainer}
        />
      </View>
      {freshRecipes.length > 0 && (
        <>
          <View style={styles.textContainer}>
            <Label19 style={styles.title}>New Fresh Recipes</Label19>
            <Label14Light
              style={styles.subTitle}
              onPress={() =>
                handleAllSeePress('New Fresh Recipes', 'fresh_recipes')
              }>
              See All
            </Label14Light>
          </View>
          <View style={styles.listContainer}>
            <FlatList
              horizontal
              data={freshRecipes}
              keyExtractor={(item) => item._id}
              renderItem={({item}) => (
                <RecipeVerticalCard
                  recipe={item}
                  onPress={() =>
                    NavigationService.navigate('RecipeDetails', {id: item._id})
                  }
                />
              )}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </>
      )}
      {recommendedRecipes.length > 0 && (
        <>
          <View style={styles.textContainer}>
            <Label19 style={styles.title}>Recommended</Label19>
            <Label14Light
              style={styles.subTitle}
              onPress={() =>
                handleAllSeePress('Recommended', 'recommended_recipes')
              }>
              See All
            </Label14Light>
          </View>
          <View style={styles.verticalListContainer}>
            <FlatList
              data={recommendedRecipes}
              keyExtractor={(item) => item._id}
              renderItem={({item}) => (
                <RecipeHorizontalCard
                  recipe={item}
                  onPress={() =>
                    NavigationService.navigate('RecipeDetails', {id: item._id})
                  }
                />
              )}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </>
      )}
      <AppSpinner loading={isLoading} />
    </View>
  )
}

export default HomeScreen
