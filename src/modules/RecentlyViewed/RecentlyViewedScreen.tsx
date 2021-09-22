import React, {useState, useEffect} from 'react'
import {View, FlatList, TouchableOpacity} from 'react-native'
import {useQuery, useMutation} from 'react-query'
import {useIsFocused} from '@react-navigation/native'

import {RecentlyViewedScreenStyles as styles} from '@styles/RecentlyViewedScreenStyles'
import {Label12, Label19} from '@components/AppText'
import AppTextInput from '@components/AppTextInput'
import RecipeHorizontalCard from '@modules/Home/components/RecipeHorizontalCard'
import AppSpinner from '@components/AppSpinner'
import NavigationService from '@navigation/NavigationService'
import {axiosInstance} from '@api/axios'

function RecentlyViewedScreen(props) {
  const isFocused = useIsFocused()
  const [searchValue, setSearchValue] = useState('')
  const getRecentlyViewedRecipes = () =>
    axiosInstance.get('/recently_viewed_recipes')
  const {
    data: recentlyViewedRecipes,
    refetch,
    isLoading,
  } = useQuery<any>('recentlyViewedRecipes', getRecentlyViewedRecipes)
  const {mutate: removeRecentlyViewedRecipe, isLoading: isLoading_} =
    useMutation(() => axiosInstance.delete('/remove_recently_viewed_recipe'), {
      onSuccess: () => {
        refetch()
      },
    })

  const [recipes, setRecipes] = useState(recentlyViewedRecipes)
  useEffect(() => {
    if (isFocused) refetch()
  }, [isFocused])
  useEffect(() => {
    setRecipes(recentlyViewedRecipes)
  }, [recentlyViewedRecipes])
  useEffect(() => {
    if (searchValue) {
      setRecipes(
        recentlyViewedRecipes.filter(
          (item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.category.toLowerCase().includes(searchValue.toLowerCase()),
        ),
      )
    } else {
      setRecipes(recentlyViewedRecipes)
    }
  }, [searchValue])
  return (
    <View style={styles.wrapper}>
      <Label19 style={styles.title}>Recently Viewed</Label19>
      <View style={styles.searchContainer}>
        <AppTextInput
          placeholder={'Search using keywords'}
          value={searchValue}
          onChangeText={(val) => setSearchValue(val)}
          isSearch
          textInputContainerStyle={styles.textInputContainer}
        />
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => removeRecentlyViewedRecipe()}>
          <Label12 style={styles.clearText}>Clear</Label12>
        </TouchableOpacity>
      </View>
      <View style={styles.verticalListContainer}>
        {recentlyViewedRecipes && (
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
      <AppSpinner loading={isLoading || isLoading_} />
    </View>
  )
}

export default RecentlyViewedScreen
