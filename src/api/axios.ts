import {getData, keys} from '@helpers/StorageHelper'
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'http://192.168.1.5:3000/api/v1',
})
const ResponseInterceptor = (response: AxiosResponse) => {
  if (response.data.response === 'FAIL') {
    throw new Error(response.data.errorMessage)
  } else {
    return response.data
  }
}
const UserRequestInterceptor = async (config: AxiosRequestConfig) => {
  const res = await getData(keys.authInfo)
  if (res) {
    config.headers['x-auth-token'] = res.token
  }
  return config
}
axiosInstance.interceptors.request.use(UserRequestInterceptor)
// Alter defaults after instance has been created
axiosInstance.interceptors.response.use(ResponseInterceptor, undefined)
