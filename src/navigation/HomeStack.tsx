import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import HomeScreen from '@modules/Home/HomeScreen'
import SeeAllRecipesScreen from '@modules/Home/components/SeeAllRecipesScreen'
import theme from '@config/theme'
import RecipeDetailsScreen from '@modules/Home/components/RecipeDetailsScreen'

const Stack = createStackNavigator()

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
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
    <Stack.Screen
      name="SeeAllRecipes"
      component={SeeAllRecipesScreen}
      options={{
        headerShown: false,
        // headerStyle: {
        //   backgroundColor: theme.custom.black,
        // },
        // headerTitleStyle: {
        //   color: theme.custom.white,
        // },
        // headerTintColor: theme.custom.white,
      }}
    />
  </Stack.Navigator>
)

export default HomeStack
