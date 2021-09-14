import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import SettingScreen from '@modules/Settings/SettingScreen'
import EditProfileScreen from '@modules/Settings/EditProfile/EditProfileScreen'
import ChangePasswordScreen from '@modules/Settings/ChangePassword/ChangePasswordScreen'
import NotificationsScreen from '@modules/Settings/Notifications/NotificationsScreen'

const Stack = createStackNavigator()
const commonOption = {
  headerShown: false,
}
const SettingStack = () => (
  <Stack.Navigator initialRouteName="Settings">
    <Stack.Screen
      name="Settings"
      component={SettingScreen}
      options={commonOption}
    />
    <Stack.Screen
      name="EditProfile"
      component={EditProfileScreen}
      options={commonOption}
    />
    <Stack.Screen
      name="ChangePassword"
      component={ChangePasswordScreen}
      options={commonOption}
    />
    <Stack.Screen
      name="Notifications"
      component={NotificationsScreen}
      options={commonOption}
    />
    <Stack.Screen
      name="ChangeLanguage"
      component={EditProfileScreen}
      options={commonOption}
    />
  </Stack.Navigator>
)

export default SettingStack
