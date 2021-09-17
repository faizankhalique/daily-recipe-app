import React, {useEffect} from 'react'
import {Platform} from 'react-native'
import Constants from 'expo-constants'
import * as Notifications from 'expo-notifications'

import {axiosInstance} from '@api/axios'
import NavigationService from '@navigation/NavigationService'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
})
export const usePushNotification = () => {
  // const notificationListener = React.useRef()
  const responseListener = React.useRef()

  const registerForPushNotificationsAsync = async () => {
    if (Constants.isDevice) {
      const {status: existingStatus} = await Notifications.getPermissionsAsync()
      let finalStatus = existingStatus
      if (existingStatus !== 'granted') {
        const {status} = await Notifications.requestPermissionsAsync()
        finalStatus = status
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!')
        return
      }
      const token = (await Notifications.getExpoPushTokenAsync()).data
      if (token) {
        console.log(`token`, token)
        await axiosInstance.put('/user/save-token', {token})
      }
    } else {
      alert('Must use physical device for Push Notifications')
    }

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      })
    }
  }
  useEffect(() => {
    registerForPushNotificationsAsync()
    // This listener is fired whenever a notification is received while the app is foregrounded
    // notificationListener.current =
    //   Notifications.addNotificationReceivedListener((notification) => {
    //     //   console.log(notification)
    //   })

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(
          'notification2',
          response.notification.request.content.data.id,
        )
        NavigationService.navigate('RecipeDetails', {
          id: response.notification.request.content.data.id,
        })
      })

    return () => {
      //   Notifications.removeNotificationSubscription(notificationListener.current)
      Notifications.removeNotificationSubscription(responseListener.current)
    }
  }, [])
  return {}
}
