import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import RecipeDetailsScreen from '@modules/Home/components/RecipeDetailsScreen'
import FavoritesScreen from '@modules/Favorites/FavoritesScreen'

const Stack = createStackNavigator()

const FavoritesStack = () => (
  <Stack.Navigator initialRouteName="Favorites">
    <Stack.Screen
      name="Favorites"
      component={FavoritesScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="RecipeDetails"
      component={RecipeDetailsScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
)

export default FavoritesStack
