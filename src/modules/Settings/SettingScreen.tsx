import React, {useContext, useState} from 'react'
import {View} from 'react-native'
import {
  Feather,
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
} from '@expo/vector-icons'

import {removeData, keys} from '@helpers/StorageHelper'
import AuthContext from '@helpers/AuthContext'
import AppSpinner from '@components/AppSpinner'
import {SettingScreenStyles as styles} from '@styles/SettingScreenStyles'
import {Label19} from '@components/AppText'
import SettingButton from './components/SettingButton'
import theme from '@config/theme'
import {getFontSize} from '@components/AppText'
import NavigationService from '@navigation/NavigationService'

function SettingScreen(props) {
  const [loading, setLoading] = useState(false)
  const {setAuthInfo} = useContext(AuthContext)
  const handlePress = (screen: string) => {
    NavigationService.navigate(screen, {})
  }
  const handleLogout = () => {
    setLoading(true)
    setTimeout(async () => {
      await removeData(keys.authInfo)
      setAuthInfo({_id: ''})
    }, 700)
  }
  return (
    <View style={styles.wrapper}>
      <Label19 style={styles.title}>Settings</Label19>
      <View style={styles.container}>
        <SettingButton
          renderIcon={() => (
            <Feather
              name="user"
              size={getFontSize(24)}
              color={theme.custom.white}
            />
          )}
          name={'Edit Profile'}
          onPress={() => handlePress('EditProfile')}
        />
        <SettingButton
          renderIcon={() => (
            <Feather
              name="lock"
              size={getFontSize(24)}
              color={theme.custom.white}
            />
          )}
          name={'Change Password'}
          onPress={() => handlePress('ChangePassword')}
        />
        <SettingButton
          renderIcon={() => (
            <Ionicons
              name="notifications-outline"
              size={getFontSize(24)}
              color={theme.custom.white}
            />
          )}
          name={'Notifications'}
          onPress={() => handlePress('Notifications')}
        />
        <SettingButton
          renderIcon={() => (
            <MaterialIcons
              name="language"
              size={getFontSize(24)}
              color={theme.custom.white}
            />
          )}
          name={'Change Language'}
          onPress={() => handlePress('ChangeLanguage')}
        />
        <View style={styles.lineContainer} />
        <SettingButton
          renderIcon={() => (
            <MaterialCommunityIcons
              name="logout"
              size={getFontSize(24)}
              color={theme.custom.white}
            />
          )}
          name={'Logout'}
          onPress={handleLogout}
        />
      </View>
      <AppSpinner loading={loading} />
    </View>
  )
}

export default SettingScreen
