import React, {useState, useContext} from 'react'
import {View, ImageBackground} from 'react-native'
import {useMutation} from 'react-query'

import {axiosInstance} from '@api/axios'
import {LoginScreenStyles as styles} from '@styles/LoginScreenStyles'
import AppCustomLogo from '@components/AppCustomLogo'
import {Label20, Label13, Label12} from '@components/AppText'
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

interface Auth {
  email: string
  password: string
}

const LoginScreen = () => {
  const {isKeyboardVisible} = useKeyboard()
  const {setAuthInfo} = useContext(AuthContext)
  const {mutate, isLoading} = useMutation(
    (auth: Auth) => axiosInstance.post('/auth/login', auth),
    {
      onError: (err) => {
        errorToast(err?.response?.data)
      },
      onSuccess: async (data) => {
        await storeData(keys.authInfo, {_id: data._id, token: data.token})
        successToast('Login successfully!')
        setAuthInfo({_id: data._id})
      },
    },
  )
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = () => mutate({email, password})
  return (
    <ImageBackground
      source={require('@assets/app_bg.png')}
      style={styles.wrapper}
      blurRadius={0.6}>
      <AppCustomLogo containerStyles={styles.logoContainerStyles} />
      <Label20 style={styles.signInText}>Sign In</Label20>

      <View style={styles.container}>
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
        <Label12 style={styles.forgotPassword}>Forgot Password?</Label12>
        <AppButton
          title="Sign In"
          onPress={handleSubmit}
          disabled={!email || !isValidEmail(email) || !password}
          buttonContainerStyles={styles.button}
        />
      </View>
      {!isKeyboardVisible && (
        <View style={styles.bottomContainer}>
          <Label13 style={{color: theme.custom.gray}}>
            Don't have an account?
          </Label13>
          <Label13
            style={{marginLeft: 5, color: theme.custom.orange}}
            onPress={() => NavigationService.navigate('Register', {})}>
            Register.
          </Label13>
        </View>
      )}
      <AppSpinner loading={isLoading} />
    </ImageBackground>
  )
}

export default LoginScreen
