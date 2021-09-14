import React from 'react'
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native'
import theme from '@config/theme'

export default function AppSpinner({loading}) {
  if (!loading) return null
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.custom.orange} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
})
