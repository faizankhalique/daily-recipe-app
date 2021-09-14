import AsyncStorage from '@react-native-async-storage/async-storage'

export const keys = {
  login: 'LOGIN',
  userId: 'USERID',
  token: 'Token',
  authInfo: 'AuthInfo',
}

export const storeData = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value)
    const val = await AsyncStorage.setItem(key, jsonValue)
    return val
  } catch (e) {
    // saving error
  }
}
export const getData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch (e) {
    // error reading value
  }
}
export const removeData = async (key: string) => {
  try {
    const val = await AsyncStorage.removeItem(key)
    return val
  } catch (e) {
    // saving error
  }
}
