import React, {useState, useEffect, useContext} from 'react'
import {View} from 'react-native'
import {useQuery, useMutation} from 'react-query'

import {EditProfileStyles as styles} from '@styles/SettingScreenStyles'
import AppHeader from '@navigation/AppHeader'
import Card from '@components/Card'
import AppTextInput from '@components/AppTextInput'
import AppButton from '@components/AppButton'
import {axiosInstance} from '@api/axios'
import AuthContext from '@helpers/AuthContext'
import AppSpinner from '@components/AppSpinner'
import {successToast} from '@helpers/Toasts'

export default function EditProfileScreen() {
  const {authInfo} = useContext(AuthContext)
  const getUserDetails = ({queryKey}) =>
    axiosInstance.get('/user/' + queryKey[1].userId)
  const {data, refetch} = useQuery<any>(
    ['userDetails', {userId: authInfo._id}],
    getUserDetails,
  )
  const {mutate, isLoading} = useMutation(
    (user: any) => axiosInstance.put('/user', user),
    {
      onSuccess: (data) => {
        successToast('Profile Updated Successfully!')
        refetch(data._id)
      },
    },
  )

  const [name, setName] = useState('')
  const [surName, setSurName] = useState('')
  const [address, setAddress] = useState('')
  useEffect(() => {
    if (data) {
      setName(data.name)
      setSurName(data.surName)
      setAddress(data.address)
    }
  }, [data])

  return (
    <View style={styles.wrapper}>
      <AppHeader title={'Edit Profile'} />
      <Card disabled cardStyles={styles.cardStyles}>
        <AppTextInput
          placeholder="Name"
          icon={'account-outline'}
          value={name}
          onChangeText={(v) => setName(v)}
        />
        <AppTextInput
          placeholder="SurName"
          icon={'account-outline'}
          value={surName}
          onChangeText={(v) => setSurName(v)}
        />
        <AppTextInput
          placeholder="Address"
          icon={'city'}
          value={address}
          onChangeText={(v) => setAddress(v)}
          multiline={true}
          numberOfLines={4}
        />
        <AppButton
          title="Submit"
          onPress={() => {
            mutate({_id: authInfo._id, name, surName, address})
          }}
          buttonContainerStyles={styles.buttonContainerStyles}
        />
      </Card>
      <AppSpinner loading={isLoading} />
    </View>
  )
}
