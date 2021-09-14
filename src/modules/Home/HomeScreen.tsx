import React, {useState, useEffect} from 'react'
import {View, Image, FlatList} from 'react-native'
import {useQuery} from 'react-query'
import {useIsFocused} from '@react-navigation/native'

import {HomeScreenStyles as styles} from '@styles/HomeScreenStyles'
import {Label12, Label14Light, Label19} from '@components/AppText'
import AppTextInput from '@components/AppTextInput'
import RecipeVerticalCard from './components/RecipeVerticalCard'
import RecipeHorizontalCard from './components/RecipeHorizontalCard'
import Recipes from '@config/Recipes'
import AppSpinner from '@components/AppSpinner'
import NavigationService from '@navigation/NavigationService'
import {axiosInstance} from '@api/axios'

function HomeScreen(props) {
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
  const handleAllSeePress = (title) => {
    NavigationService.navigate('SeeAllRecipes', {
      title,
    })
  }
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
        <View style={styles.iconContainer}>
          <Image
            source={require('@assets/filter.png')}
            style={styles.filterIcon}
          />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Label19 style={styles.title}>Today's Fresh Recipes</Label19>
        <Label14Light
          style={styles.subTitle}
          onPress={() => handleAllSeePress("Today's Fresh Recipes")}>
          See All
        </Label14Light>
      </View>
      {data && (
        <>
          <View style={styles.listContainer}>
            <FlatList
              horizontal
              data={data.todayFreshRecipes}
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
          <View style={styles.textContainer}>
            <Label19 style={styles.title}>Recommended</Label19>
            <Label14Light
              style={styles.subTitle}
              onPress={() => handleAllSeePress('Recommended')}>
              See All
            </Label14Light>
          </View>
          <View style={styles.verticalListContainer}>
            <FlatList
              data={data.recommendedRecipes}
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
