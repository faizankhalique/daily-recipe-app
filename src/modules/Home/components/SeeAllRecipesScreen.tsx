import React, {useState, useEffect} from 'react'
import {View, FlatList} from 'react-native'
import {useQuery} from 'react-query'
import {useIsFocused} from '@react-navigation/native'

import {FavoriteScreenStyles as styles} from '@styles/FavoriteScreenStyles'
import AppTextInput from '@components/AppTextInput'
import RecipeHorizontalCard from '@modules/Home/components/RecipeHorizontalCard'
import AppSpinner from '@components/AppSpinner'
import AppHeader from '@navigation/AppHeader'
import {axiosInstance} from '@api/axios'
import NavigationService from '@navigation/NavigationService'

function SeeAllRecipesScreen(props) {
  const {title, key} = props.route.params
  const isFocused = useIsFocused()

  const getAllRecipes = () => axiosInstance.get(`/${key}`)
  const {
    data: allRecipes,
    refetch,
    isLoading,
  } = useQuery<any>(key, getAllRecipes)
  useEffect(() => {
    if (isFocused) refetch()
  }, [isFocused])
  const [searchValue, setSearchValue] = useState('')
  const [recipes, setRecipes] = useState(allRecipes)
  useEffect(() => {
    if (isFocused) refetch()
  }, [isFocused])
  useEffect(() => {
    setRecipes(allRecipes)
  }, [allRecipes])
  useEffect(() => {
    if (searchValue) {
      const filterRecipes = allRecipes.filter(
        (item) =>
          item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.category.toLowerCase().includes(searchValue.toLowerCase()),
      )
      setRecipes(filterRecipes)
    } else {
      setRecipes(allRecipes)
    }
  }, [searchValue])

  return (
    <View style={styles.wrapper}>
      <AppHeader title={title} />
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
        {recipes && (
          <FlatList
            data={recipes}
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
        )}
      </View>
      <AppSpinner loading={isLoading} />
    </View>
  )
}

export default SeeAllRecipesScreen
