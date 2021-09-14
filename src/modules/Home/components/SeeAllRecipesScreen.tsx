import React, {useState, useEffect} from 'react'
import {View, Image, FlatList} from 'react-native'
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
  const isFocused = useIsFocused()

  const getAllRecipes = () => axiosInstance.get('/recipe')
  const {
    data: recipes,
    refetch,
    isLoading,
  } = useQuery('allRecipes', getAllRecipes)
  const {title} = props.route.params
  useEffect(() => {
    if (isFocused) refetch()
  }, [isFocused])
  const [searchValue, setSearchValue] = useState('')

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
        <View style={styles.iconContainer}>
          <Image
            source={require('@assets/filter.png')}
            style={styles.filterIcon}
          />
        </View>
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
