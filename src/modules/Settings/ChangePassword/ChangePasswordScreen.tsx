import React, {useState, useEffect} from 'react'
import {View} from 'react-native'
import {useMutation} from 'react-query'

import {ChangePasswordStyles as styles} from '@styles/SettingScreenStyles'
import AppHeader from '@navigation/AppHeader'
import AppSpinner from '@components/AppSpinner'
import Card from '@components/Card'
import AppTextInput from '@components/AppTextInput'
import AppButton from '@components/AppButton'
import {Label13Light} from '@components/AppText'
import {axiosInstance} from '@api/axios'
import {successToast} from '@helpers/Toasts'

export default function ChangePasswordScreen() {
  const {mutate, isLoading} = useMutation(
    (data) => axiosInstance.put('/user/change-password', data),
    {
      onError: (error) => {
        console.log('error :>> ', error)
      },
      onSuccess: (data) => {
        successToast('Password Updated Successfully!')
      },
    },
  )
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  useEffect(() => {
    setError('')
  }, [password, confirmPassword])
  const canSubmit = () => {
    if (password.length < 6) {
      setError('Password at least 6 characters')
      return false
    } else if (confirmPassword.length < 6) {
      setError('ConfirmPassword at least 6 characters')
      return false
    } else if (password !== confirmPassword) {
      setError('Password and ConfirmPassword should be match')
      return false
    } else {
      setError('')
      return true
    }
  }
  const handleSubmit = () => {
    if (canSubmit()) mutate({password})
  }
  return (
    <View style={styles.wrapper}>
      <AppHeader title="Change Password" />
      <Card disabled cardStyles={styles.cardStyles}>
        <AppTextInput
          icon={'lock'}
          placeholder={'Password'}
          password
          value={password}
          onChangeText={(v) => setPassword(v)}
        />
        <AppTextInput
          icon={'lock'}
          placeholder={'Confirm Password'}
          password
          value={confirmPassword}
          onChangeText={(v) => setConfirmPassword(v)}
        />
        <Label13Light
          style={{alignSelf: 'center', color: 'red', textAlign: 'center'}}>
          {error}
        </Label13Light>
        <AppButton
          title="Submit"
          onPress={handleSubmit}
          buttonContainerStyles={styles.buttonContainerStyles}
        />
      </Card>
      <AppSpinner loading={isLoading} />
    </View>
  )
}
