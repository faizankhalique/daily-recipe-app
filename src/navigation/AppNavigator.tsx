import React, {useEffect} from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {MaterialCommunityIcons, Ionicons} from '@expo/vector-icons'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

import {getFontSize, Label10} from '@components/AppText'
import theme from '@config/theme'
import RecentlyViewedStack from './RecentlyViewedStack'
import FavoritesStack from './FavoritesStack'
import HomeStack from './HomeStack'
import SettingStack from './SettingStack'
import {usePushNotification} from '@hooks/usePushNotifications'

const Tab = createBottomTabNavigator()
const getIconStyles = (focused) => {
  return {
    color: focused ? theme.custom.orange : theme.custom.medium_grey,
    fontSize: getFontSize(22),
  }
}
const TabTitle = ({title, isFocused}) => (
  <Label10
    style={{
      color: isFocused ? theme.custom.orange : theme.custom.medium_grey,
    }}>
    {title}
  </Label10>
)

const AppNavigator = () => {
  usePushNotification()

  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      tabBarOptions={{
        showLabel: true,
        labelStyle: {
          color: theme.custom.orange,
        },
        tabStyle: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: wp(2),
        },
        style: {
          height: hp(8),
          width: '100%',
          paddingVertical: wp(1),
          paddingHorizontal: wp(2),
          backgroundColor: theme.custom.light_black,
          borderTopColor: theme.custom.light_black,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={({navigation, route}) => {
          return {
            tabBarIcon: ({focused}) => (
              <MaterialCommunityIcons
                name={focused ? 'home' : 'home-outline'}
                style={getIconStyles(focused)}
              />
            ),
            tabBarLabel: ({focused}) => (
              <TabTitle title={'Home'} isFocused={focused} />
            ),
          }
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesStack}
        options={({navigation, route}) => {
          return {
            tabBarIcon: ({focused}) => (
              <MaterialCommunityIcons
                name={focused ? 'heart' : 'heart-outline'}
                style={getIconStyles(focused)}
              />
            ),
            tabBarLabel: ({focused}) => (
              <TabTitle title={'Favorites'} isFocused={focused} />
            ),
          }
        }}
      />
      <Tab.Screen
        name="RecentlyViewed"
        component={RecentlyViewedStack}
        options={({navigation, route}) => {
          return {
            tabBarIcon: ({focused}) => (
              <Ionicons
                name={focused ? 'play' : 'play-outline'}
                style={getIconStyles(focused)}
              />
            ),
            tabBarLabel: ({focused}) => (
              <TabTitle title={'Recently View'} isFocused={focused} />
            ),
          }
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingStack}
        options={({navigation, route}) => {
          return {
            tabBarIcon: ({focused}) => (
              <Ionicons
                name={focused ? 'settings' : 'settings-outline'}
                style={getIconStyles(focused)}
              />
            ),
            tabBarLabel: ({focused}) => (
              <TabTitle title={'Settings'} isFocused={focused} />
            ),
          }
        }}
      />
    </Tab.Navigator>
  )
}

export default AppNavigator
