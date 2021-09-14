import React, {useState, useContext} from 'react'
import {View, ImageBackground} from 'react-native'
import {useMutation} from 'react-query'

import {axiosInstance} from '@api/axios'
import {RegisterScreenStyles as styles} from '@styles/RegisterScreenStyles'
import AppCustomLogo from '@components/AppCustomLogo'
import {Label20, Label13} from '@components/AppText'
import AppTextInput from '@components/AppTextInput'
import AppButton from '@components/AppButton'
import theme from '@config/theme'
import NavigationService from '@navigation/NavigationService'
import {storeData, keys} from '@helpers/StorageHelper'
import AuthContext from '@helpers/AuthContext'
import AppSpinner from '@components/AppSpinner'
import {successToast, errorToast} from '@helpers/Toasts'
import {isValidEmail} from '@helpers/utilHelper'
import {useKeyboard} from '@hooks/useKeyboard'

interface User {
  name: string
  email: string
  password: string
}
const RegisterScreen = () => {
  const {isKeyboardVisible} = useKeyboard()
  const {setAuthInfo} = useContext(AuthContext)
  const {mutate, isLoading} = useMutation(
    (user: User) => axiosInstance.post('/auth/signup', user),
    {
      onError: (err: any) => {
        errorToast(err?.response?.data)
      },
      onSuccess: async (data: any) => {
        await storeData(keys.authInfo, {_id: data._id, token: data.token})
        successToast('Sign-up successfully!')
        setAuthInfo({_id: data._id})
      },
    },
  )
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = () => mutate({name, email, password})
  return (
    <ImageBackground
      source={require('@assets/app_bg.png')}
      style={styles.wrapper}
      blurRadius={0.6}>
      <AppCustomLogo containerStyles={styles.logoContainerStyles} />
      <Label20 style={styles.registerText}>Register</Label20>

      <View style={styles.container}>
        <AppTextInput
          icon={'account-outline'}
          placeholder={'Name'}
          value={name}
          onChangeText={(val) => setName(val)}
        />
        <AppTextInput
          autoCapitalize={'none'}
          autoCorrect={false}
          icon={'email'}
          keyboardType="email-address"
          placeholder={'Email Address'}
          value={email}
          onChangeText={(val) => setEmail(val)}
        />
        <AppTextInput
          autoCapitalize={'none'}
          autoCorrect={false}
          icon={'lock'}
          placeholder={'Password'}
          password
          value={password}
          onChangeText={(val) => setPassword(val)}
        />
        <AppButton
          title="Register"
          onPress={handleSubmit}
          buttonContainerStyles={styles.button}
          disabled={!name || !email || !isValidEmail(email) || !password}
        />
      </View>
      {!isKeyboardVisible && (
        <View style={styles.bottomContainer}>
          <Label13 style={{color: theme.custom.gray}}>
            Already registered?
          </Label13>
          <Label13
            style={{marginLeft: 5, color: theme.custom.orange}}
            onPress={() => NavigationService.navigate('Login', {})}>
            Sign in.
          </Label13>
        </View>
      )}
      <AppSpinner loading={isLoading} />
    </ImageBackground>
  )
}

export default RegisterScreen
