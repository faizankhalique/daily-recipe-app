import {StatusBar} from 'expo-status-bar'
import React, {useState, useEffect} from 'react'
import {StyleSheet, Image, YellowBox, View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {QueryClient, QueryClientProvider} from 'react-query'

import AuthNavigator from '@navigation/AuthNavigator'
import NavigationService from '@navigation/NavigationService'
import AppNavigator from '@navigation/AppNavigator'
import {myTheme} from '@navigation/navigationTheme'
import AuthContext from '@helpers/AuthContext'
import {keys, getData} from '@helpers/StorageHelper'
import AppSpinner from '@components/AppSpinner'
import theme from '@config/theme'

YellowBox.ignoreWarnings(['Warning: ...'])
console.disableYellowBox = true
const queryClient = new QueryClient()
export default function App() {
  const [authInfo, setAuthInfo] = useState({_id: ''})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      getData(keys.authInfo)
        .then((res) => {
          if (res._id) {
            setAuthInfo({_id: res._id})
          }
          setLoading(false)
        })
        .catch((e) => setLoading(false))
    }, 500)
  }, [])

  return (
    <View style={styles.container}>
      <QueryClientProvider client={queryClient}>
        <AuthContext.Provider value={{authInfo, setAuthInfo}}>
          <StatusBar style="light" />
          {loading ? (
            <Image source={require('@assets/app_bg.png')} />
          ) : (
            <NavigationContainer
              ref={(navigatorRef) => {
                NavigationService.setTopLevelNavigator(navigatorRef)
              }}
              theme={myTheme}>
              {authInfo._id ? <AppNavigator /> : <AuthNavigator />}
            </NavigationContainer>
          )}
          <AppSpinner loading={loading} />
        </AuthContext.Provider>
      </QueryClientProvider>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  image: {
    width: '100%',
    height: '100%',
  },
})
