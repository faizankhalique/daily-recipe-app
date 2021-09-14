import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import RecipeDetailsScreen from '@modules/Home/components/RecipeDetailsScreen'
import RecentlyViewedScreen from '@modules/RecentlyViewed/RecentlyViewedScreen'

const Stack = createStackNavigator()
const commonOption = {
  headerShown: false,
}

const RecentlyViewedStack = () => (
  <Stack.Navigator initialRouteName="RecentlyViewed">
    <Stack.Screen
      name="RecentlyViewed"
      component={RecentlyViewedScreen}
      options={commonOption}
    />
    <Stack.Screen
      name="RecipeDetails"
      component={RecipeDetailsScreen}
      options={commonOption}
    />
  </Stack.Navigator>
)

export default RecentlyViewedStack
