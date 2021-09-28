import React, {useState, useEffect} from 'react'
import {View, FlatList} from 'react-native'
import {useQuery} from 'react-query'
import {useIsFocused} from '@react-navigation/native'

import {FavoriteScreenStyles as styles} from '@styles/FavoriteScreenStyles'
import {Label19} from '@components/AppText'
import AppTextInput from '@components/AppTextInput'
import RecipeHorizontalCard from '@modules/Home/components/RecipeHorizontalCard'
import AppSpinner from '@components/AppSpinner'
import NavigationService from '@navigation/NavigationService'
import {axiosInstance} from '@api/axios'
import {useSearch} from '@hooks/useSerach'

function FavoritesScreen(props) {
  const isFocused = useIsFocused()
  const getFavoritesRecipes = () => axiosInstance.get('/favorites_recipes')
  const {
    data: favoritesRecipes,
    refetch,
    isLoading,
  } = useQuery<any>('favoritesRecipes', getFavoritesRecipes)

  const [searchValue, setSearchValue] = useState('')
  useEffect(() => {
    if (isFocused) refetch()
  }, [isFocused])
  const {hits: recipes} = useSearch(favoritesRecipes, searchValue, [
    'name',
    'category',
  ])
  return (
    <View style={styles.wrapper}>
      <Label19 style={styles.title}>My Favorites</Label19>
      <View style={styles.searchContainer}>
        <AppTextInput
          placeholder={'Search using keywords'}
          value={searchValue}
          onChangeText={(val) => setSearchValue(val)}
          isSearch
          textInputContainerStyle={styles.textInputContainer}
        />
      </View>
      <View style={styles.verticalListContainer}>
        <FlatList
          data={recipes}
          keyExtractor={(item) => item._id}
          renderItem={({item}) => (
            <RecipeHorizontalCard
              recipe={{...item, isLiked: true}}
              onPress={() =>
                NavigationService.navigate('RecipeDetails', {id: item._id})
              }
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <AppSpinner loading={isLoading} />
    </View>
  )
}

export default FavoritesScreen
